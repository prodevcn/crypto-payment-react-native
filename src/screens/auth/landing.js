import React from 'react';
import {SafeAreaView, View, Image, Dimensions, StyleSheet} from 'react-native';
import styles from '../../constant/styles';
import {Button, Text} from 'react-native-paper';
import config from '../../constant/config';
const Landing = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View style={_inner.logo_section}>
          <View style={_inner.logo_back}>
            <Image
              style={_inner.logo}
              source={require('../../../assets/images/logo.png')}
            />
          </View>
          <Text style={_inner.title}>ROYAL TRANSFERT</Text>
          <Text style={_inner.title1}>
            MOBILE INSTANT PAYMENTS AROUND THE WORLD
          </Text>
        </View>
        <View style={_inner.btn_section}>
          <Button
            mode="outlined"
            style={styles.outlined_button}
            onPress={() => {
              props.navigation.navigate('user-agreement');
            }}
            color={config.dark_theme.secondary}>
            signup
          </Button>
          <Button
            mode="contained"
            style={styles.outlined_button2}
            onPress={() => {
              props.navigation.navigate('login');
            }}
            color={config.dark_theme.login_btn}>
            login
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  main: {
    backgroundColor: config.dark_theme.third,
  },
  logo: {
    width: window.width * 0.4,
    height: window.width * 0.4,
    alignSelf: 'center',
  },
  logo_section: {
    alignItems: 'flex-start',
  },
  title: {
    width: window.width * 0.8,
    textAlign: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.05,
  },
  container: {
    width: window.width * 0.8,
    height: window.height * 0.8,
    marginTop: window.height * 0.1,
    marginBottom: window.height * 0.1,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title1: {
    width: window.width * 0.8,
    marginTop: 20,
    textAlign: 'center',
    color: config.dark_theme.color.description,
  },
  logo_back: {
    marginTop: '10%',
    width: window.width * 0.5,
    height: window.width * 0.5,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Landing;
