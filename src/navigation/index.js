import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import AuthNavigation from './auth';
import AppNavigation from './main';
import Support from '../screens/support';
import CreateTicket from '../screens/create-ticket';
import config from '../constant/config';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const headerOption = {
  headerShown: false,
};
const headerOption2 = {
  headerTintColor: config.dark_theme.third,
  headerStyle: {
    backgroundColor: config.dark_theme.primary,
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerShown: true,
  title: '',
};
const RootStack = () => {
  const {authenticated} = useSelector((state) => state.user);
  return (
    <Stack.Navigator>
      {authenticated ? (
        <Stack.Screen
          name="main"
          component={AppNavigation}
          options={headerOption}
        />
      ) : (
        <Stack.Screen
          name="auth"
          component={AuthNavigation}
          options={headerOption}
        />
      )}
      <Stack.Screen
        name="support"
        component={Support}
        options={headerOption2}
      />
      <Stack.Screen
        name="create-ticket"
        component={CreateTicket}
        options={headerOption2}
      />
    </Stack.Navigator>
  );
};
const MainNavigation = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <RootStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
