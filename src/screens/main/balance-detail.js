import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../../constant/styles';
import config from '../../constant/config';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import currencies from '../../constant/currency';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Modal} from 'react-native-paper';
import {Calendar} from 'react-native-calendario';

const BalanceDetail = (props) => {
  const {wallet} = useSelector((state) => state.wallet);
  const {user} = useSelector((state) => state.user);
  const [selectedCurrency, selectCurrency] = useState(
    props.route.params.selectedCurrency,
  );
  const [visible, setVisible] = useState(false);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((e) => e.id, []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: window.width,
        offset: index * window.width,
      }),
      [],
    ),
  };

  const closeCalendar = () => {
    setVisible(false);
  };
  const openCalendar = () => {
    setVisible(true);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View style={_inner.header_bar}>
          <Text style={_inner.title}>{selectedCurrency.name}</Text>
        </View>
        <TouchableOpacity
          style={_inner.btn_rounded}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon name="arrowleft" size={20} color={config.dark_theme.third} />
        </TouchableOpacity>
        <View style={_inner.carousel_area}>
          {/* <FlatList
            data={slideList}
            style={{flex: 1}}
            renderItem={({item}) => {
              return <Slide data={item} />;
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            {...flatListOptimizationProps}
          /> */}
        </View>
        <View style={_inner.card}>
          <View style={_inner.row}>
            <TouchableOpacity style={_inner.day_btn}>
              <Icon
                name="pluscircleo"
                size={20}
                color={config.dark_theme.color.disabled}
              />
              <Text style={_inner.btn_label_1}>Add</Text>
              <Text style={_inner.btn_label_1}>money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.day_btn}>
              <Icon2
                name="exchange"
                size={20}
                color={config.dark_theme.color.disabled}
              />
              <Text style={_inner.btn_label_1}>Transfer</Text>
              <Text style={_inner.btn_label_1}>money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.day_btn}>
              <Icon
                name="sync"
                size={20}
                color={config.dark_theme.color.disabled}
              />
              <Text style={_inner.btn_label_1}>Exchange</Text>
              <Text style={_inner.btn_label_1}>money</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={_inner.row}>
          <Text style={_inner.sub_title}>Recent transactions</Text>
          <Button
            mode="text"
            color={config.dark_theme.color.disabled}
            tintColor={config.dark_theme.third}
            onPress={() => {
              openCalendar();
            }}>
            <Icon
              name="calendar"
              size={20}
              color={config.dark_theme.color.disabled}
            />
          </Button>
        </View>
        <View style={_inner.empty_history}>
          <Icon3
            color={config.dark_theme.third}
            size={window.width * 0.2}
            name="money-bill"
          />
          <Text style={_inner.sub_title}>Refill your account</Text>
          <Text style={_inner.btn_label_1}>
            Make your first transaction using Dash
          </Text>
        </View>
        <Button
          mode="outlined"
          color={config.dark_theme.third}
          style={_inner.outlined_button2}>
          add money
        </Button>
      </View>
      <Modal
        visible={visible}
        onDismiss={closeCalendar}
        contentContainerStyle={_inner.modal}>
        <View style={_inner.row}>
          <Text style={_inner.sub_title}>FILTER BY DATE</Text>
          <Button
            mode="outlined"
            color={config.dark_theme.third}
            style={styles.outlined_button3}
            onPress={() => {
              setVisible(false);
            }}>
            apply filter
          </Button>
        </View>
        <Calendar
          onChange={(range) => console.log(range)}
          startingMonth="2019-01-01"
          numberOfMonths={24}
          // minDate={new Date(2018, 3, 1)}
          // startDate={new Date(2018, 3, 2)}
          // endDate={new Date(2021, 4, 5)}
          theme={{
            activeDayColor: {
              color: config.dark_theme.secondary,
            },
            monthTitleTextStyle: {
              color: config.dark_theme.third,
              fontWeight: '300',
              fontSize: 16,
            },
            emptyMonthContainerStyle: {},
            emptyMonthTextStyle: {
              fontWeight: '200',
            },
            weekColumnsContainerStyle: {},
            weekColumnStyle: {
              paddingVertical: 10,
            },
            weekColumnTextStyle: {
              color: '#b6c1cd',
              fontSize: 13,
            },

            nonTouchableDayContainerStyle: {},
            nonTouchableDayTextStyle: {},
            startDateContainerStyle: {},
            endDateContainerStyle: {},
            dayContainerStyle: {
              backgroundColor: 'transparent',
            },
            dayTextStyle: {
              color: config.dark_theme.third,
              fontWeight: '200',
              fontSize: 15,
            },
            dayOutOfRangeContainerStyle: {},
            dayOutOfRangeTextStyle: {},
            todayContainerStyle: {},
            todayTextStyle: {
              color: config.dark_theme.third,
            },
            activeDayContainerStyle: {
              backgroundColor: config.dark_theme.third,
            },
            activeDayTextStyle: {
              color: 'white',
            },
            nonTouchableLastMonthDayTextStyle: {},
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default BalanceDetail;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: config.dark_theme.color.description,
    fontSize: window.width * 0.1,
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: config.dark_theme.third,
  },
  container: {
    width: window.width * 0.9,
    height: window.height * 0.85,
    marginTop: window.height * 0.02,
    marginBottom: window.height * 0.1,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: config.dark_theme.color.card,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  header_bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  day_btn: {
    backgroundColor: config.dark_theme.color.card,
    paddingVertical: 5,
    width: '30%',
    alignItems: 'center',
    borderRadius: 100,
  },
  btn_label: {
    color: config.dark_theme.color.description,
  },
  btn_label_1: {
    color: config.dark_theme.color.disabled,
    textAlign: 'center',
  },
  btn_label_buy: {
    color: config.dark_theme.color.up,
  },
  btn_label_sell: {
    color: config.dark_theme.color.down,
  },
  order_btn_buy: {
    width: '45%',
    borderColor: config.dark_theme.color.up,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 2,
    borderRadius: 10,
  },
  order_btn_sell: {
    width: '45%',
    borderColor: config.dark_theme.color.down,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 2,
    borderRadius: 10,
  },
  btn_rounded: {
    backgroundColor: config.dark_theme.color.card,
    padding: 5,
    position: 'absolute',
    borderRadius: 100,
  },
  carousel_area: {},
  sub_title: {
    color: config.dark_theme.color.description,
    fontSize: 16,
  },
  modal: {
    backgroundColor: config.dark_theme.color.card,
    width: window.width * 0.9,
    height: window.height * 0.8,
    alignSelf: 'center',
    marginVertical: window.height * 0.1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    // alignItems: 'center',
  },
  child: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  swiper: {
    width: '100%',
    height: window.height * 0.5,
    backgroundColor: 'red',
  },
  text: {fontSize: window.width * 0.5, textAlign: 'center'},
  empty_history: {
    width: '100%',
    alignItems: 'center',
  },
  outlined_button2: {
    width: '100%',
    borderWidth: 1,
    margin: '2%',
    borderColor: config.dark_theme.third,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
