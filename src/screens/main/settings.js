import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../constant/styles';
import config from '../../constant/config';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
// const BalanceStack =

const Settings = (props) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <Text style={_inner.title}>SETTINGS</Text>
        <View style={_inner.section}>
          <Text style={styles.section_title}>MY ACCOUNT</Text>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.option_item}
              onPress={() => {
                props.navigation.navigate('account-info');
              }}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Profile</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Edit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Verification</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Verification</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Security</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Edit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Password</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Edit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>PIN code</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Edit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.section_title}>SETTINGS</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Visual theme</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Dark</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>App language</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>System Language</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>Balance currency</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>USD</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={_inner.section}>
          <Text style={styles.section_title}>TEMPLATE</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.option_item}>
              <View style={styles.half_section}>
                <Text style={styles.option_title}>My template</Text>
              </View>
              <View style={styles.half_section}>
                <Text style={styles.option_description}>Edit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          mode="contained"
          color={config.dark_theme.secondary}
          onPress={() => {
            //   goNext();
          }}>
          <Icon name="logout" size={16} />
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

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
