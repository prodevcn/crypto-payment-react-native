import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button} from 'react-native-paper';
import {Card} from 'native-base';
import styles from '../../constant/styles';
import config from '../../constant/config';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import currencies from '../../constant/currency';
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Trade = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  // const [clicked, setClicked] = useState(null);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        contentContainerStyle={_inner.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={config.dark_theme.third}
          />
        }>
        <View style={_inner.header_bar}>
          <TouchableOpacity
            style={styles.btn_rounded}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="arrowleft" size={20} color={config.dark_theme.third} />
          </TouchableOpacity>
          <TouchableOpacity style={_inner.currency_pair} onPress={() => {}}>
            <Text style={_inner.btn_label}>EURO / USD</Text>
            <Icon3
              name="angle-down"
              size={20}
              color={config.dark_theme.color.description}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn_rounded}
            onPress={() => {
              props.navigation.navigate('order-history');
            }}>
            <Icon
              name="clockcircleo"
              size={20}
              color={config.dark_theme.third}
            />
          </TouchableOpacity>
        </View>
        <View style={_inner.row}>
          <View style={_inner.card}>
            <Image style={_inner.logo} source={currencies[1].iconUri} />
            <View>
              <Text style={_inner.btn_label_1}>0.000</Text>
              <Text style={_inner.btn_label}>Euro Balance</Text>
            </View>
          </View>
          <View style={_inner.card}>
            <Image style={_inner.logo} source={currencies[0].iconUri} />
            <View>
              <Text style={_inner.btn_label_1}>0.000</Text>
              <Text style={_inner.btn_label}>USD Balance</Text>
            </View>
          </View>
        </View>
        <View style={_inner.row}>
          <TouchableOpacity style={_inner.day_btn}>
            <Text style={_inner.btn_label}>12H</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_inner.day_btn}>
            <Text style={_inner.btn_label}>1D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_inner.day_btn}>
            <Text style={_inner.btn_label}>3D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_inner.day_btn}>
            <Text style={_inner.btn_label}>1W</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_inner.day_btn}>
            <Text style={_inner.btn_label}>1M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_inner.day_btn}>
            <Text style={_inner.btn_label}>ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={_inner.row}>
          <View style={_inner.price_unit}>
            <Text style={styles.text_up}>$50.530</Text>
            <Text style={styles.option_title}>Bid</Text>
          </View>
          <View style={_inner.price_unit}>
            <Text style={styles.option_description}>$50.530</Text>
            <Text style={styles.option_title}>Last Price</Text>
          </View>
          <View style={_inner.price_unit}>
            <Text style={styles.text_down}>$50.530</Text>
            <Text style={styles.option_title}>Ask</Text>
          </View>
        </View>
        <View style={_inner.row}>
          <TouchableOpacity style={_inner.order_btn_buy}>
            <View>
              <Text style={_inner.btn_label_buy}>EURO</Text>
              <Text style={_inner.btn_label_buy}>0.000</Text>
            </View>
            <Icon2
              name="arrow-down-left"
              color={config.dark_theme.color.up}
              size={28}
            />
          </TouchableOpacity>
          <TouchableOpacity style={_inner.order_btn_sell}>
            <View>
              <Text style={_inner.btn_label_sell}>EURO</Text>
              <Text style={_inner.btn_label_sell}>0.000</Text>
            </View>
            <Icon2
              name="arrow-up-right"
              color={config.dark_theme.color.down}
              size={28}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trade;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    width: window.width * 0.8,
    fontFamily: config.dark_theme.font.primary,
    textAlign: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: config.dark_theme.third,
    // textShadowRadius: 10,
  },
  label: {
    color: config.dark_theme.third,
  },
  item: {
    borderBottomColor: config.dark_theme.third,
    paddingBottom: 10,
  },
  icon: {
    color: config.dark_theme.third,
    fontSize: 20,
  },
  text_btn: {
    alignSelf: 'flex-end',
    marginTop: '5%',
  },
  container: {
    width: window.width * 0.9,
    height: window.height * 0.85,
    marginTop: window.height * 0.02,
    marginBottom: window.height * 0.1,
    // backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pin_code: {
    // backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  pin_element: {
    width: '22%',
    height: '100%',
    color: config.dark_theme.color.description,
    borderBottomColor: config.dark_theme.third,
    borderBottomWidth: 2,
    fontSize: 36,
    textAlign: 'center',
  },
  keyboard: {
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    // marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  card: {
    backgroundColor: config.dark_theme.color.card,
    width: '45%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // height: window.height * 0.1,
    padding: 10,
    borderRadius: 10,
  },
  keyEntry: {
    width: window.width * 0.8 * 0.2,
    height: window.width * 0.8 * 0.2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
    borderColor: config.dark_theme.third,
    alignSelf: 'center',
  },
  keyEntry2: {
    width: window.width * 0.8 * 0.2,
    height: window.width * 0.8 * 0.2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
    borderColor: config.dark_theme.secondary,
    alignSelf: 'center',
  },
  keyEntry3: {
    width: '90%',
    height: window.width * 0.8 * 0.2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
    borderColor: config.dark_theme.secondary,
    alignSelf: 'center',
    shadowColor: config.dark_theme.third,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 20,
  },
  currency_pair: {
    width: window.width * 0.3,
    backgroundColor: config.dark_theme.color.card,
    height: window.height * 0.05,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  header_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  day_btn: {
    backgroundColor: config.dark_theme.color.card,
    paddingVertical: 5,
    width: '15%',
    alignItems: 'center',
    tintColor: 'red',
    // paddingHorizontal: 10,
    borderRadius: 100,
  },
  btn_label: {
    color: config.dark_theme.color.description,
  },
  btn_label_1: {
    color: config.dark_theme.color.description,
    fontSize: 28,
  },
  btn_label_buy: {
    color: config.dark_theme.color.up,
  },
  btn_label_sell: {
    color: config.dark_theme.color.down,
  },
  order_btn_buy: {
    width: '45%',
    // backgroundColor: config.dark_theme.color.up,
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
    // backgroundColor: config.dark_theme.color.down,
    borderColor: config.dark_theme.color.down,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 2,
    borderRadius: 10,
  },
  logo: {
    width: window.width * 0.1,
    height: window.width * 0.1,
    // top: -(window.width * 0.08),
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  price_unit: {
    width: '30%',
    alignItems: 'center',
  },
});
