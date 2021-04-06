import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button} from 'react-native-paper';
import currencies from '../../constant/currency';
// import {ActionSheet} from 'react-native-android-sheet';

// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../constant/styles';
import config from '../../constant/config';
import {Form, Input, Label, Item, Icon} from 'native-base';

const Exchange = (props) => {
  const [giveCurrency, setGiveCurrency] = useState(null);
  const [giveBalance, setGiveBalance] = useState(null);
  const [giveAmount, setGiveAmount] = useState('0');
  const [getAmount, setGetAmount] = useState('0');
  const [getCurrency, setGetCurrency] = useState(null);
  const [getBalance, setGetBalance] = useState(null);

  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View>
          <Text style={_inner.title}>Exchange</Text>

          <Form style={_inner.form}>
            <View style={_inner.row}>
              <Item floatingLabel style={_inner.give_item}>
                <Label style={_inner.give_label}>GIVE</Label>
                <Input
                  style={_inner.give_input}
                  color={config.dark_theme.color.description}
                  value={giveAmount}
                  onChangeText={(e) => {
                    setGiveAmount(e);
                  }}
                />
                <Icon style={_inner.icon2} name="cash" />
              </Item>
              <TouchableOpacity style={_inner.item_card}>
                <Image
                  style={_inner.currency_small}
                  source={require('../../../assets/images/coins/cdn.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={_inner.row2}>
              <Text style={_inner.description_title}>Balance : </Text>
              <Text style={_inner.description_title}>balance $ </Text>
            </View>
            <View style={_inner.row2}>
              <Text style={_inner.description_title}>Rate : </Text>
              <Text style={_inner.description_title}>rate </Text>
            </View>
            <View style={_inner.row}>
              <Item floatingLabel style={_inner.get_item}>
                <Label style={_inner.get_label}>GET</Label>
                <Input
                  style={_inner.get_input}
                  color={config.dark_theme.color.description}
                  value={giveAmount}
                  onChangeText={(e) => {
                    setGiveAmount(e);
                  }}
                />
                <Icon style={_inner.icon} name="cash" />
              </Item>
              <TouchableOpacity style={_inner.item_card}>
                <Image
                  style={_inner.currency_small}
                  source={require('../../../assets/images/coins/cdn.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={_inner.row2}>
              <Text style={_inner.description_title}>Balance : </Text>
              <Text style={_inner.description_title}>balance $ </Text>
            </View>
          </Form>
        </View>
        <Button
          mode="outlined"
          color={config.dark_theme.third}
          style={styles.outlined_button2}>
          exchange
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Exchange;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    // width: window.width * 0.8,
    fontFamily: config.dark_theme.font.primary,
    alignSelf: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: config.dark_theme.third,
    // textShadowRadius: 10,
  },
  label: {
    color: config.dark_theme.red,
  },
  item: {
    borderBottomColor: config.dark_theme.third,
    paddingBottom: 10,
  },
  icon: {
    color: config.dark_theme.third,
    // fontSize: 20,
  },
  text_btn: {
    alignSelf: 'flex-end',
    marginTop: '5%',
  },
  container: {
    width: window.width * 0.9,
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
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
  give_title: {
    marginVertical: 10,
    fontSize: 16,
    color: config.dark_theme.color.down,
  },
  get_title: {
    marginVertical: 10,
    fontSize: 16,
    color: config.dark_theme.color.up,
  },
  description_title: {
    marginVertical: 10,
    fontSize: 16,
    color: config.dark_theme.color.description,
  },
  give_input: {
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  give_label: {
    color: config.dark_theme.color.down,
  },
  give_item: {
    borderBottomColor: config.dark_theme.color.down,
    paddingBottom: 10,
    width: '60%',
  },
  get_input: {
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  get_label: {
    color: config.dark_theme.color.up,
  },
  get_item: {
    borderBottomColor: config.dark_theme.color.up,
    paddingBottom: 10,
    width: '60%',
  },
  form: {
    width: '100%',
    // backgroundColor: 'red',
  },
  item_card: {
    backgroundColor: config.dark_theme.color.card,
    width: '30%',
    // height: window.height * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  currency_small: {
    width: window.height * 0.07,
    height: window.height * 0.07,
    // marginBottom: 10,
  },
  icon2: {
    color: config.dark_theme.color.down,
    // fontSize: 20,
  },
  row2: {
    marginBottom: 10,
    width: '100%',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
