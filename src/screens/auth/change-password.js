import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../constant/styles';
import config from '../../constant/config';
import {Form, Input, Label, Item, Icon} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {changePassword} from '../../action/auth';

const ChangePassword = (props) => {
  const {user} = useSelector((state) => state.user);
  const [password, setPassword] = useState(user.password);
  const [secret, setSecret] = useState(user.secret_number);
  const dispatch = useDispatch();
  const doConfirm = () => {
    dispatch(changePassword(user, password, secret));
  };

  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView>
        <View style={_inner.container}>
          <View>
            <Text style={_inner.title}>PASSWORD SETTING</Text>
            <Form>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>password</Label>
                <Input
                  style={styles.default_input}
                  color={config.dark_theme.color.description}
                  value={password}
                  onChangeText={(e) => {
                    setPassword(e);
                  }}
                />
                <Icon style={_inner.icon} name="key-outline" />
              </Item>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>re-enter password</Label>
                <Icon name="key-outline" style={_inner.icon} />
                <Input
                  style={styles.default_input}
                  textContentType="password"
                  color={config.dark_theme.color.description}
                  value={password}
                />
              </Item>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>secret word</Label>
                <Icon name="text" style={_inner.icon} />
                <Input
                  style={styles.default_input}
                  color={config.dark_theme.color.description}
                  value={secret}
                  onChangeText={(e) => {
                    setSecret(e);
                  }}
                />
              </Item>
              <Text style={styles.description}>
                BE WARE that you must remember this secret word
              </Text>
            </Form>
          </View>
          <View>
            <Button
              mode="outline"
              color={config.dark_theme.third}
              style={styles.outlined_button2}
              onPress={() => {
                doConfirm();
              }}>
              confirm
            </Button>
            <Button
              mode="outline"
              color={config.dark_theme.secondary}
              style={styles.outlined_button}
              onPress={() => {
                props.navigation.goBack();
              }}>
              revert
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangePassword;

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
    marginBottom: window.height * 0.1,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
