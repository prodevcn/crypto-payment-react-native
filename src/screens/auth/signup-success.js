import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Dimensions,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../constant/styles';
import config from '../../constant/config';
import {Form, Input, Label, Item, Icon} from 'native-base';
import {useSelector} from 'react-redux';
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-simple-toast';

const SignupSuccess = (props) => {
  const {user} = useSelector((state) => state.user);
  const {fetching} = useSelector((state) => state.common);
  const copyToClipboard = (data) => {
    Clipboard.setString(data);
    Toast.show('Account number copied to clipboard !', Toast.LONG, Toast.TOP);
  };
  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView>
        {fetching && (
          <ActivityIndicator
            size="large"
            color={config.dark_theme.third}
            style={_inner.activity}
          />
        )}
        <View style={_inner.container}>
          <View>
            <Text style={_inner.title}>Signup Success</Text>
            <Text style={styles.description}>
              After set your password, keep it in a safe place.
            </Text>
            <Form>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>Account number</Label>
                <Input
                  style={styles.default_input}
                  color={config.dark_theme.color.description}
                  value={user.account_number}
                />
                <Icon style={_inner.icon} name="person-outline" />
              </Item>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>Password</Label>
                <Icon name="key-outline" style={_inner.icon} />
                <Input
                  style={styles.default_input}
                  textContentType="password"
                  color={config.dark_theme.color.description}
                  value={user.password}
                />
              </Item>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>Secret Word</Label>
                <Icon name="text" style={_inner.icon} />
                <Input
                  style={styles.default_input}
                  color={config.dark_theme.color.description}
                  value={user.secret_number}
                />
              </Item>
              <Text style={styles.description}>
                If you did not add a secret word, leave the field blank
              </Text>
            </Form>
            <Button
              mode="text"
              color={config.dark_theme.color.description}
              onPress={() => {
                copyToClipboard(user.account_number);
              }}>
              copy to clipboard
            </Button>
          </View>
          <View>
            <Button
              mode="outline"
              color={config.dark_theme.third}
              style={styles.outlined_button2}
              onPress={() => {
                props.navigation.navigate('create-pin');
              }}>
              confirm
            </Button>
            <Button
              mode="outline"
              color={config.dark_theme.secondary}
              style={styles.outlined_button}
              onPress={() => {
                props.navigation.navigate('change-password');
              }}>
              change password
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupSuccess;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    width: window.width * 0.8,
    fontFamily: config.dark_theme.font.primary,
    textAlign: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: config.dark_theme.secondary,
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
    height: window.height,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  activity: {
    top: '50%',
  },
});
