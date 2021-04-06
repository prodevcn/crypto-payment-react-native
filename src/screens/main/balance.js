import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import styles from '../../constant/styles';
import config from '../../constant/config';
import Icon from 'react-native-vector-icons/AntDesign';

import Header from '../../component/header_2';
import currencies from '../../constant/currency';
import {useSelector} from 'react-redux';

const Balance = (props) => {
  const {wallet} = useSelector((state) => state.wallet);
  const goDetail = (currency) => {
    props.navigation.navigate('balance-detail', {selectedCurrency: currency});
  };
  return (
    <SafeAreaView style={styles.main}>
      <Header navigation={props.navigation} />
      <View style={_inner.container}>
        <View style={_inner.balance}>
          <Icon name="wallet" size={32} color={config.dark_theme.third} />
          <Text style={_inner.balance_text}>0.0000</Text>
        </View>
        <View style={_inner.price_chart}>
          <FlatList
            style={styles.list}
            data={currencies}
            renderItem={({item}) => (
              <View style={_inner.card}>
                <View style={_inner.lt_side}>
                  <Image
                    source={require('../../../assets/images/chart.png')}
                    style={_inner.chart}
                  />
                  <Text style={_inner.price}>{wallet[item.em]} $</Text>
                  <Text style={_inner.volumes}>1,590 $</Text>
                </View>
                <View style={_inner.rt_side}>
                  <Image source={item.iconUri} style={_inner.currency_small} />
                  <Text style={styles.description_text}>{item.name} </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <ScrollView style={_inner.scroll} showsVerticalScrollIndicator={false}>
          <View style={_inner.row}>
            <TouchableOpacity
              style={_inner.item_card}
              onPress={() => {
                goDetail(currencies[0]);
              }}>
              <Image
                style={_inner.currency_small}
                source={currencies[0].iconUri}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={_inner.item_card}
              onPress={() => {
                goDetail(currencies[1]);
              }}>
              <Image
                style={_inner.currency_small}
                source={currencies[1].iconUri}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={_inner.item_card}
              onPress={() => {
                goDetail(currencies[2]);
              }}>
              <Image
                style={_inner.currency_small}
                source={currencies[2].iconUri}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
          </View>
          <View style={_inner.row}>
            <TouchableOpacity
              style={_inner.item_card}
              onPress={() => {
                goDetail(currencies[3]);
              }}>
              <Image
                style={_inner.currency_small}
                source={currencies[3].iconUri}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={_inner.item_card}
              onPress={() => {
                goDetail(currencies[4]);
              }}>
              <Image
                style={_inner.currency_small}
                source={currencies[4].iconUri}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/btc.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
          </View>
          <View style={_inner.row}>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/eth.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/usdt.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/ltc.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
          </View>
          <View style={_inner.row}>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/dash.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/xrp.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Text style={styles.description_text}>. . .</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Balance;

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
    height: window.height * 0.8,
    // marginBottom: window.height * 0.1,
    alignSelf: 'center',
    flexDirection: 'column',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
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
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  price_chart: {
    width: window.width * 1.1,
    left: -window.width * 0.1,
    // backgroundColor: 'yellow',
  },
  card: {
    width: window.width * 0.75,
    backgroundColor: config.dark_theme.color.card,
    // marginRight: 20,
    marginLeft: window.width * 0.1,
    borderRadius: 10,
    height: window.height * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  chart: {
    width: '100%',
    height: 45,
    // margin: '10%',
  },
  currency_small: {
    width: window.height * 0.07,
    height: window.height * 0.07,
    marginBottom: 10,
  },
  rt_side: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lt_side: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  price: {
    position: 'absolute',
    color: config.dark_theme.color.description,
    fontSize: 32,
    bottom: '50%',
  },
  volumes: {
    position: 'absolute',
    color: config.dark_theme.color.up,
    fontSize: 16,
    bottom: '10%',
  },
  item_card: {
    backgroundColor: config.dark_theme.color.card,
    width: '30%',
    height: window.height * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  scroll: {
    height: window.height * 0.2,
    marginTop: 20,
    // backgroundColor: 'aqua',
  },
  balance: {
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance_text: {
    color: config.dark_theme.color.up,
    fontSize: 32,
    marginLeft: 20,
  },
});
