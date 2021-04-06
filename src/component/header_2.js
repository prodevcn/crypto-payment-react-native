import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';
import config from '../constant/config';
import styles from '../constant/styles';
import {useSelector} from 'react-redux';
const Header = (props) => {
  const {user} = useSelector((state) => state.user);
  return (
    <View style={_inner.main}>
      <View style={_inner.container}>
        <TouchableOpacity
          style={_inner.personal_section}
          onPress={() => {
            props.navigation.navigate('account-info');
          }}>
          <Icon2
            name="user-circle"
            size={40}
            style={_inner.avatar}
            color={config.dark_theme.third}
          />
          <View style={_inner.avatar_desc}>
            <Text style={_inner.title}>Account No</Text>
            <Text style={styles.description_text}>{user.account_number}</Text>
          </View>
        </TouchableOpacity>
        <View style={_inner.control}>
          <Button
            transparent
            iconLeft
            light
            style={_inner.button}
            onPress={() => {
              props.navigation.navigate('message');
            }}>
            <Icon name="message1" size={28} color={config.dark_theme.third} />
          </Button>
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
              size={28}
              color={config.dark_theme.third}
            />
          </Button>
          <Button
            transparent
            iconLeft
            light
            style={_inner.button}
            onPress={() => {
              props.navigation.navigate('settings');
            }}>
            <Icon name="setting" size={28} color={config.dark_theme.third} />
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Header;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  main: {
    width: window.width,
    backgroundColor: 'transparent',
  },
  container: {
    width: window.width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    color: config.dark_theme.third,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 10,
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  personal_section: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
  avatar_desc: {
    alignItems: 'flex-start',
    // justifyContent: 'space-',
    // backgroundColor: 'tomato',
  },
});
