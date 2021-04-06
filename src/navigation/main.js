import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import config from '../constant/config';
// balance
import Balance from '../screens/main/balance';
import BalanceDetail from '../screens/main/balance-detail';
import AddMoney from '../screens/main/add-money';
import AddDetail from '../screens/main/add-detail';
import AddConfirm from '../screens/main/add-confirm';
// Transfer
import Transfer from '../screens/main/transfer';
import TransferDetail from '../screens/main/transfer-detail';
import TransferConfirm from '../screens/main/transfer-confirm';
// Trade
import Trade from '../screens/main/trade';

// Exchange
import Exchange from '../screens/main/exchange';
// History
import History from '../screens/main/history';
// other...
import Settings from '../screens/main/settings';
import AccountInfo from '../screens/main/account-info';
import Message from '../screens/main/message';
import Bind from '../screens/main/bind';
import OrderHistory from '../screens/main/order-history';

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
      <Stack.Screen
        name="add-money"
        component={AddMoney}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="add-detail"
        component={AddDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="add-confirm"
        component={AddConfirm}
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
      <Stack.Screen
        name="transfer-detail"
        component={TransferDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="transfer-confirm"
        component={TransferConfirm}
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
      <Stack.Screen
        name="history"
        component={History}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="balance-screen"
      activeColor={config.dark_theme.third}
      inactiveColor={'white'}
      barStyle={{
        backgroundColor: config.dark_theme.primary,
      }}
      tabBarOptions={{
        activeTintColor: config.dark_theme.secondary,
        inactiveTintColor: 'white',
        inactiveBackgroundColor: config.dark_theme.third,
        activeBackgroundColor: config.dark_theme.third,
        // borderColor: 'red',
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
        name="transfer-screen"
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
