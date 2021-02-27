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
          <Text style={_inner.title}>ROYAL TRANSFERT</Text>
          <View style={_inner.logo_back}>
            <Image
              style={_inner.logo}
              source={require('../../../assets/images/logo.png')}
            />
          </View>
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
  logo: {
    width: window.width * 0.4,
    height: window.width * 0.4,
    alignSelf: 'center',
  },
  logo_section: {
    paddingTop: window.height * 0.1,
  },
  title: {
    width: window.width * 0.8,
    fontFamily: config.dark_theme.font.primary,
    textAlign: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: config.dark_theme.third,
    textShadowRadius: 10,
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
  logo_back: {
    marginTop: '10%',
    width: window.width * 0.5,
    height: window.width * 0.5,
    borderRadius: 100,
    alignSelf: 'center',
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 10},
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Landing;
