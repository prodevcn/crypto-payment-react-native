import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../../constant/styles';
import config from '../../constant/config';
import Icon from 'react-native-vector-icons/AntDesign';
import payment_systems from '../../constant/payment-system';
const AddMoney = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View style={_inner.header_bar}>
          <Text style={_inner.title}>Add</Text>
        </View>
        <Text style={styles.description_text}>CHOOSE PAYMENT SYSTEM</Text>
        <TouchableOpacity
          style={_inner.btn_rounded}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon name="arrowleft" size={20} color={config.dark_theme.third} />
        </TouchableOpacity>
        <View style={_inner.row}>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              props.navigation.navigate('add-detail', {
                payment_system: payment_systems[0],
                selectedCurrency: props.route.params.selectedCurrency,
              });
            }}>
            <Image
              source={payment_systems[0].iconUri}
              style={_inner.currency_small}
            />
            <Text style={styles.description_text}>
              {payment_systems[0].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              props.navigation.navigate('add-detail', {
                payment_system: payment_systems[1],
                selectedCurrency: props.route.params.selectedCurrency,
              });
            }}>
            <Image
              source={payment_systems[1].iconUri}
              style={_inner.currency_small}
            />
            <Text style={styles.description_text}>
              {payment_systems[1].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              props.navigation.navigate('add-detail', {
                payment_system: payment_systems[2],
                selectedCurrency: props.route.params.selectedCurrency,
              });
            }}>
            <Image
              source={payment_systems[2].iconUri}
              style={_inner.currency_small}
            />
            <Text style={styles.description_text}>
              {payment_systems[2].name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={_inner.row}>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              props.navigation.navigate('add-detail', {
                payment_system: payment_systems[3],
                selectedCurrency: props.route.params.selectedCurrency,
              });
            }}>
            <Image
              source={payment_systems[3].iconUri}
              style={_inner.currency_small}
            />
            <Text style={styles.description_text}>
              {payment_systems[3].name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddMoney;

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
    marginBottom: 10,
  },
  item_card: {
    backgroundColor: config.dark_theme.color.card,
    width: '30%',
    height: window.height * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
