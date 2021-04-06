import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Dimensions, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../constant/styles';
import config from '../../constant/config';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
// const BalanceStack =

const AccountInfo = (props) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const doBind = (title) => {
    props.navigation.navigate('bind', {title: title});
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <Text style={_inner.title}>ACCOUNT INFO</Text>
        <View style={_inner.section}>
          <Text style={styles.section_title}>MY ACCOUNT</Text>
          <View style={styles.card}>
            <View style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Account No.</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>
                  {user.account_number}
                </Text>
              </View>
            </View>
            <View style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Account Type</Text>
              </View>
              <View style={styles.half_section}>
                {user.approved ? (
                  <Text style={styles.option_description}>Verified</Text>
                ) : (
                  <Text style={styles.option_description}>Registered</Text>
                )}
              </View>
            </View>
            <View style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Registration</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>
                  {user.created_time}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.section_title}>CONTACT INFORMATION</Text>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.option_item}
              onPress={() => {
                doBind('mail');
              }}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Email</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Not Set</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option_item}
              onPress={() => {
                doBind('phone');
              }}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Mobile Phone</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Not Set</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={_inner.section}>
          <Text style={styles.section_title}>APPS</Text>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.option_item}
              onPress={() => {
                doBind('telegram');
              }}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Telegram</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>
                  Your Telegram nick
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountInfo;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    fontFamily: config.dark_theme.font.primary,
    alignSelf: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: config.dark_theme.third,
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
    width: window.width * 0.9,
    height: window.height * 0.9,
    alignSelf: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  description: {
    width: '100%',
  },
});
