import React, {useState} from 'react';
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
import Header from '../../component/header';
const Signup = (props) => {
  const [userId, setUserId] = useState(null);
  return (
    <SafeAreaView style={styles.main}>
      <Header navigation={props.navigation} />
      <KeyboardAvoidingView>
        <View style={_inner.container}>
          <View>
            <Text style={_inner.title}>LOGIN</Text>
            <Form>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>account number or email</Label>
                <Input
                  style={styles.default_input}
                  color={config.dark_theme.color.description}
                  value={userId}
                  onChangeText={(e) => {
                    setUserId(e);
                  }}
                />
                <Icon style={_inner.icon} name="person-outline" />
              </Item>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>password</Label>
                <Icon name="key-outline" style={_inner.icon} />
                <Input
                  style={styles.default_input}
                  color={config.dark_theme.color.description}
                  value={userId}
                  onChangeText={(e) => {
                    setUserId(e);
                  }}
                />
              </Item>
              <Button
                mode="text"
                color={config.dark_theme.secondary}
                style={_inner.text_btn}
                onPress={() => {
                  props.navigation.navigate('forget-password');
                }}>
                Forget password ?
              </Button>
            </Form>
          </View>
          <View>
            <Button
              mode="outline"
              color={config.dark_theme.third}
              style={styles.outlined_button2}>
              login
            </Button>
            <Button mode="text" color={config.dark_theme.secondary}>
              sign up
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

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
    height: window.height * 0.7,
    marginTop: window.height * 0.1,
    marginBottom: window.height * 0.1,
    // backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
