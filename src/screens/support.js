import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../constant/styles';
import config from '../constant/config';
import Icon from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ChangePassword = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View>
          <Text style={_inner.title}>SUPPORT</Text>
        </View>
        <ScrollView style={_inner.scroll} showsVerticalScrollIndicator={false}>
          <Icon
            name="ticket"
            size={window.width * 0.5}
            color={config.dark_theme.third}
            style={_inner.ticket}
          />
          <Text style={_inner.description}>You don't have any ticket yet</Text>
          <Text style={_inner.sub_description}>
            Have any questions or problems with your RT card /account?
          </Text>
        </ScrollView>
        <View />
        <View>
          <Button
            mode="text"
            color={config.dark_theme.secondary}
            onPress={() => {
              props.navigation.navigate('create-ticket');
            }}>
            compose a new ticket
          </Button>
        </View>
      </View>
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
  ticket: {
    alignSelf: 'center',
  },
  text_btn: {
    alignSelf: 'flex-end',
    marginTop: '5%',
  },
  scroll: {
    width: '100%',
  },
  container: {
    width: window.width * 0.8,
    height: window.height * 0.8,
    // marginTop: window.height * 0.1,
    marginBottom: window.height * 0.1,
    // backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  description: {
    color: config.dark_theme.third,
    alignSelf: 'center',
  },
  sub_description: {
    color: config.dark_theme.color.description,
  },
});
