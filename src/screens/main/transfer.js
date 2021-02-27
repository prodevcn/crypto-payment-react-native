import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import config from '../../constant/config';
import styles from '../../constant/styles';
const Transfer = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View>
          <Text style={_inner.title}>TRANSFER</Text>
          <Text style={_inner.description}>-- CHOOSE PAYMENT SYSTEM --</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={_inner.scroll}>
          <View style={_inner.row}>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/usd.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/eur.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/cdn.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
          </View>
          <View style={_inner.row}>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/gbp.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/coins/xof.png')}
              />
              <Text style={styles.description_text}>0.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_inner.item_card}>
              <Text style={styles.description_text}>...</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Transfer;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    width: window.width * 0.9,
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
    marginTop: window.height * 0.1,
    width: window.width * 0.9,
    marginBottom: window.height * 0.1,
    alignSelf: 'center',
    flexDirection: 'column',
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
  description: {
    alignSelf: 'center',
    color: config.dark_theme.color.description,
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
    height: window.height * 0.5,
    marginTop: 20,
    // backgroundColor: 'red',
  },
  currency_small: {
    width: window.height * 0.07,
    height: window.height * 0.07,
    marginBottom: 10,
  },
});
