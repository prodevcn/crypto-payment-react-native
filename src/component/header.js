import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from 'native-base';
import config from '../constant/config';
const Header = (props) => {
  return (
    <View style={_inner.main}>
      <Text style={_inner.title}>Login</Text>
      <Button
        transparent
        iconLeft
        light
        style={_inner.button}
        onPress={() => {
          props.navigation.navigate('support');
        }}>
        <Icon
          name="customerservice"
          size={20}
          color={config.dark_theme.third}
        />
      </Button>
    </View>
  );
};

export default Header;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  main: {
    width: window.width,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  title: {
    margin: 10,
    color: config.dark_theme.third,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 10,
  },
});
