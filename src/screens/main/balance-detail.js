/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../../constant/styles';
import config from '../../constant/config';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import {setFetched, setFetching} from '../../action/common';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Modal} from 'react-native-paper';
import {Calendar} from 'react-native-calendario';
import network from '../../constant/network';
import Toast from 'react-native-simple-toast';
import TransactionHistoryItem from '../../component/transaction_history_item';

const BalanceDetail = (props) => {
  const dispatch = useDispatch();
  const {wallet} = useSelector((state) => state.wallet);
  const {user} = useSelector((state) => state.user);
  const [charges, setCharges] = useState([]);
  const {filterRange, setFilterRange} = useState({});
  const [selectedCurrency, selectCurrency] = useState(
    props.route.params.selectedCurrency,
  );
  const [visible, setVisible] = useState(false);

  const closeCalendar = () => {
    setVisible(false);
  };
  const openCalendar = () => {
    setVisible(true);
  };
  const getChargeHistory = () => {
    const url = network.base_url + '/charge/get-charge-history';
    dispatch(setFetching());
    network.headers.Authorization = user.token;
    fetch(url, {
      method: 'POST',
      headers: network.headers,
      body: JSON.stringify({user: user, currency: selectedCurrency.em}),
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (!resJson.msg) {
          setCharges(resJson);
        } else {
          Toast.show('There is charge history', Toast.LONG, Toast.TOP);
        }
        dispatch(setFetched());
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    console.log(props.route.params.selectedCurrency);
    console.log(wallet);
    getChargeHistory();
  }, []);
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
          <View style={_inner.balance_area}>
            <Image
              style={_inner.currency_small}
              source={selectedCurrency.iconUri}
            />
            <Text style={_inner.balance_txt}>
              {wallet[selectedCurrency.em]} {selectedCurrency.symbol}
            </Text>
          </View>
          <Text style={styles.description_text}>
            RT {selectedCurrency.name} BALANCE
          </Text>
        </View>
        {charges.length !== 0 ? (
          <View>
            <View style={_inner.card}>
              <View style={_inner.row}>
                <TouchableOpacity
                  style={_inner.day_btn}
                  onPress={() => {
                    props.navigation.navigate('add-money', {
                      selectedCurrency: selectedCurrency,
                    });
                  }}>
                  <Icon
                    name="pluscircleo"
                    size={20}
                    color={config.dark_theme.color.disabled}
                  />
                  <Text style={_inner.btn_label_1}>Add</Text>
                  <Text style={_inner.btn_label_1}>money</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={_inner.day_btn}
                  onPress={() => {
                    props.navigation.navigate('transfer-screen');
                  }}>
                  <Icon2
                    name="exchange"
                    size={20}
                    color={config.dark_theme.color.disabled}
                  />
                  <Text style={_inner.btn_label_1}>Transfer</Text>
                  <Text style={_inner.btn_label_1}>money</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={_inner.day_btn}
                  onPress={() => {
                    props.navigation.navigate('exchange-screen');
                  }}>
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
            <FlatList
              style={_inner.charge_history_area}
              data={charges}
              renderItem={({item}) => (
                <TransactionHistoryItem data={item} id={item.id} />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <View style={{height: 300}}>
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
              style={_inner.outlined_button2}
              onPress={() => {
                props.navigation.navigate('add-money', {
                  selectedCurrency: selectedCurrency,
                });
              }}>
              add money
            </Button>
          </View>
        )}
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
          onChange={(range) => setFilterRange(range)}
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
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
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
  carousel_area: {
    // backgroundColor: 'tomato',
    alignItems: 'center',
  },
  balance_area: {
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  balance_txt: {
    color: config.dark_theme.color.description,
    fontSize: window.height * 0.07,
  },
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
    // backgroundColor: 'red',
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
    marginTop: window.height * 0.1,
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
  currency_small: {
    width: window.height * 0.07,
    height: window.height * 0.07,
    marginRight: 10,
  },
  charge_history_area: {
    // backgroundColor: 'red',
    width: '100%',
    height: window.height * 0.4,
  },
});
