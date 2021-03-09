import React, {useState} from 'react';
import config from '../../constant/config';
import styles from '../../constant/styles';
import {SafeAreaView, View, Text, Dimensions, StyleSheet} from 'react-native';
import {Input, Label, Item, Icon} from 'native-base';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
const Bind = (props) => {
  const {user} = useSelector((state) => state.user);
  const [title, setTitle] = useState(props.route.params.title);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [tele, setTele] = useState(null);
  const doContinue = () => {
    if (title === 'mail') {
      console.log(isEmail(email));
    }
    if (title === 'phone') {
      console.log(isMobilePhone(phone));
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        {props.route.params.title === 'mail' && (
          <View>
            <Text style={_inner.title}>EMAIL CONFIRMATION</Text>
            <Text style={_inner.description}>
              WE WILL SEND VERIFICATION CODE TO YOUR NEW EMAIL
            </Text>
            <Item floatingLabel style={_inner.item}>
              <Label style={_inner.label}>Email</Label>
              <Input
                style={styles.default_input}
                color={config.dark_theme.color.description}
                placeholder="user@mail.com"
                value={email}
                onChangeText={(e) => {
                  setEmail(e);
                }}
              />
              <Icon style={_inner.icon} name="mail-outline" />
            </Item>
          </View>
        )}
        {props.route.params.title === 'phone' && (
          <View>
            <Text style={_inner.title}>BIND PHONE</Text>
            <Item floatingLabel style={_inner.item}>
              <Label style={_inner.label}>Phone</Label>
              <Input
                style={styles.default_input}
                color={config.dark_theme.color.description}
                value={phone}
                onChangeText={(e) => {
                  setPhone(e);
                }}
              />
              <Icon style={_inner.icon} name="call-outline" />
            </Item>
          </View>
        )}
        {props.route.params.title === 'telegram' && (
          <View>
            <Text style={_inner.title}>Bind {props.route.params.title}</Text>
            <Item floatingLabel style={_inner.item}>
              <Label style={_inner.label}>Telegram username</Label>
              <Input
                style={styles.default_input}
                color={config.dark_theme.color.description}
                value={tele}
                onChangeText={(e) => {
                  setTele(e);
                }}
              />
              <Icon style={_inner.icon} name="link-outline" />
            </Item>
          </View>
        )}
        <Button
          mode="contained"
          color={config.dark_theme.third}
          onPress={() => {
            doContinue();
          }}>
          continue
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Bind;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    fontFamily: config.dark_theme.font.primary,
    alignSelf: 'center',
    textAlign: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: config.dark_theme.third,
    // backgroundColor: 'yellow',
  },
  label: {
    color: config.dark_theme.third,
  },
  item: {
    borderBottomColor: config.dark_theme.third,
    paddingBottom: 10,
    marginVertical: 20,
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
    width: window.width * 0.9,
    height: window.height * 0.9,
    alignSelf: 'center',
    marginTop: window.height * 0.05,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  description: {
    color: config.dark_theme.color.disabled,
    alignSelf: 'center',
    textAlign: 'center',
  },
  message: {
    paddingHorizontal: 10,
    color: config.dark_theme.color.disabled,
  },
  message_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  reduce_btn: {
    color: config.dark_theme.color.disabled,
    backgroundColor: config.dark_theme.primary,
    borderRadius: 100,
    paddingHorizontal: 5,
  },
  section: {
    // backgroundColor: 'yellow',
  },
  message_date: {
    color: config.dark_theme.color.description,
  },
  activity: {
    top: '50%',
  },
  modal: {
    backgroundColor: config.dark_theme.color.card,
    width: window.width * 0.8,
    height: window.height * 0.4,
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 20,
  },
  modal_scroll: {
    width: '100%',
    paddingHorizontal: 20,
    // height:
  },
  detail_date: {
    // color: config.dark_theme.third,
    color: config.dark_theme.color.disabled,
    marginHorizontal: 20,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  message_title: {
    color: config.dark_theme.third,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
