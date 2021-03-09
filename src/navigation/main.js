import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Button} from 'react-native-paper';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import styles from '../constant/styles';
import config from '../constant/config';

import Balance from '../screens/main/balance';
import Transfer from '../screens/main/transfer';
import Trade from '../screens/main/trade';
import Exchange from '../screens/main/exchange';
import History from '../screens/main/history';
import Settings from '../screens/main/settings';
import AccountInfo from '../screens/main/account-info';
import Message from '../screens/main/message';
import Bind from '../screens/main/bind';
import OrderHistory from '../screens/main/order-history';
import BalanceDetail from '../screens/main/balance-detail';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const headerOption = {
  headerTintColor: config.dark_theme.third,
  headerStyle: {
    backgroundColor: config.dark_theme.primary,
    borderBottomWidth: 0,
    elevation: 0,
    // shadowOpacity: 0,
  },
  headerShown: true,
  title: '',
};
const BalanceStack = () => {
  return (
    <Stack.Navigator initialRouteName="balance">
      <Stack.Screen
        name="balance"
        component={Balance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="balance-detail"
        component={BalanceDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TransferStack = () => {
  return (
    <Stack.Navigator initialRouteName="transfer">
      <Stack.Screen
        name="transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TradeStack = () => {
  return (
    <Stack.Navigator initialRouteName="trade">
      <Stack.Screen
        name="trade"
        component={Trade}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ExchangeStack = () => {
  return (
    <Stack.Navigator initialRouteName="exchange">
      <Stack.Screen
        name="exchange"
        component={Exchange}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const HistoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="history">
      <Stack.Screen name="history" component={History} options={headerOption} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="balance-screen"
      activeColor={config.dark_theme.secondary}
      inactiveColor={'white'}
      barStyle={{
        backgroundColor: config.dark_theme.third,
      }}
      tabBarOptions={{
        activeTintColor: config.dark_theme.secondary,
        inactiveTintColor: 'white',
        inactiveBackgroundColor: config.dark_theme.third,
        activeBackgroundColor: config.dark_theme.third,
        borderColor: 'red',
      }}>
      <Tab.Screen
        name="balance-screen"
        component={BalanceStack}
        options={{
          tabBarLabel: 'BALANCE',
          tabBarIcon: ({color, size}) => (
            <Icon2 name="wallet" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="transfer-stack"
        component={TransferStack}
        options={{
          tabBarLabel: 'TRANSFER',
          tabBarIcon: ({color, size}) => (
            <Icon name="exchange" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="trade-screen"
        component={TradeStack}
        options={{
          tabBarLabel: 'TRADE',
          tabBarIcon: ({color, size}) => (
            <Icon name="line-chart" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="exchange-screen"
        component={ExchangeStack}
        options={{
          tabBarLabel: 'EXCHANGE',
          tabBarIcon: ({color, size}) => (
            <Icon name="recycle" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="history-stack"
        component={HistoryStack}
        options={{
          tabBarLabel: 'HISTORY',
          tabBarIcon: ({color, size}) => (
            <Icon name="history" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName="tabs">
      <Stack.Screen
        name="tabs"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={headerOption}
      />
      <Stack.Screen
        name="account-info"
        component={AccountInfo}
        options={headerOption}
      />
      <Stack.Screen
        name="bind"
        component={Bind}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="order-history"
        component={OrderHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen name="message" component={Message} options={headerOption} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

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
