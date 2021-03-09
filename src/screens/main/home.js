import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createTabNavigator} from '@react-navigation/bottom-tabs';

import styles from '../../constant/styles';
import config from '../../constant/config';

const Tab = createTabNavigator();
const Stack = createStackNavigator();

// const BalanceStack =

const Home = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container} />
    </SafeAreaView>
  );
};

export default Home;

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
    width: window.width * 0.8,
    height: window.height * 0.8,
    marginTop: window.height * 0.1,
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
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
});
