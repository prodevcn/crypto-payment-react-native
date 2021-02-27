import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/auth/landing';
import Login from '../screens/auth/login';
import ForgetPassword from '../screens/auth/forget-password';
import UserAgreement from '../screens/auth/user-agreement';
import SignupSuccess from '../screens/auth/signup-success';
import ChangePassword from '../screens/auth/change-password';
import CreatePin from '../screens/auth/create-pin';
import config from '../constant/config';

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
const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="landing">
      <Stack.Screen
        name="landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forget-password"
        component={ForgetPassword}
        options={headerOption}
      />
      <Stack.Screen
        name="user-agreement"
        component={UserAgreement}
        options={headerOption}
      />
      <Stack.Screen
        name="signup-success"
        component={SignupSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="change-password"
        component={ChangePassword}
        options={headerOption}
      />
      <Stack.Screen
        name="create-pin"
        component={CreatePin}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthNavigation = (props) => {
  return <RootStack />;
};

export default AuthNavigation;
