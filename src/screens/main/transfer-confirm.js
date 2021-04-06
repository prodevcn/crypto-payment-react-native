/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
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
import styles from '../../constant/styles';
import config from '../../constant/config';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
const TransferConfirm = (props) => {
  const {user} = useSelector((state) => state.user);
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View style={_inner.header_bar}>
          <Text style={_inner.title}>Confirmation</Text>
        </View>
        <TouchableOpacity
          style={_inner.btn_rounded}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon name="arrowleft" size={20} color={config.dark_theme.third} />
        </TouchableOpacity>
        <View style={_inner.balance}>
          <Image
            source={props.route.params.sendCurrency.iconUri}
            style={_inner.currency_small}
          />
          <Text style={_inner.balance_text}>{props.route.params.amount}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sub_title}>Payment Information</Text>
          <View style={styles.option_item}>
            <View style={styles.half_section}>
              <Text style={styles.option_title}>Payment System</Text>
            </View>
            <View style={styles.half_section}>
              <Text style={styles.option_description}>RoyalTransfert</Text>
            </View>
          </View>
          <View style={styles.option_item}>
            <View style={styles.half_section}>
              <Text style={styles.option_title}>Credit</Text>
            </View>
            <View style={styles.half_section}>
              <Text style={styles.option_description}>
                {props.route.params.sendCurrency.symbol}{' '}
                {props.route.params.amount}
              </Text>
            </View>
          </View>
          <View style={styles.option_item}>
            <View style={styles.half_section}>
              <Text style={styles.option_title}>Address</Text>
            </View>
            <View style={styles.half_section}>
              <Text style={styles.option_description}>
                {props.route.params.account_number}
              </Text>
            </View>
          </View>
        </View>
        <Button
          mode="outlined"
          color={config.dark_theme.third}
          style={_inner.outlined_button2}
          onPress={() => {}}>
          Confirm
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default TransferConfirm;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
  },
  container: {
    width: window.width * 0.9,
    height: window.height * 0.85,
    marginTop: window.height * 0.02,
    marginBottom: window.height * 0.1,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: config.dark_theme.color.card,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  header_bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  btn_rounded: {
    backgroundColor: config.dark_theme.color.card,
    padding: 5,
    position: 'absolute',
    left: 0,
    borderRadius: 100,
  },
  currency_small: {
    width: window.height * 0.07,
    height: window.height * 0.07,
    // marginBottom: 10,
  },
  item_card: {
    backgroundColor: config.dark_theme.color.card,
    width: '30%',
    height: window.height * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  outlined_button2: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    borderWidth: 1,
    margin: '2%',
    borderColor: config.dark_theme.third,
    alignSelf: 'center',
  },
  balance: {
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  balance_text: {
    color: config.dark_theme.color.description,
    fontSize: 32,
    marginLeft: 20,
  },
});
