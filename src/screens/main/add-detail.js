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
import {Button, Modal} from 'react-native-paper';
import styles from '../../constant/styles';
import config from '../../constant/config';
import Icon from 'react-native-vector-icons/AntDesign';
import {Form, Input, Label, Item} from 'native-base';
import currencies from '../../constant/currency';
import {setFetched, setFetching} from '../../action/common';
import {useSelector, useDispatch} from 'react-redux';
import payment_systems from '../../constant/payment-system';
const AddDetail = (props) => {
  const {user} = useSelector((state) => state.user);
  const {wallet} = useSelector((state) => state.wallet);
  const {fee} = useSelector((state) => state.common);
  const [amount, setAmount] = useState(0);
  const [visible, setVisible] = useState(false);
  const closeModal = () => {
    setVisible(false);
  };
  const openModal = () => {
    setVisible(true);
  };
  const [selectedCurrency, setSelectCurrency] = useState(
    props.route.params.selectedCurrency,
  );
  const [payment_system, setPaymentSystem] = useState(
    props.route.params.payment_system,
  );
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View style={_inner.header_bar}>
          <Text style={_inner.title}>Add</Text>
        </View>
        <TouchableOpacity
          style={_inner.btn_rounded}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon name="arrowleft" size={20} color={config.dark_theme.third} />
        </TouchableOpacity>
        <Form style={_inner.form}>
          <View style={_inner.row}>
            <Item floatingLabel style={_inner.give_item}>
              <Label style={_inner.give_label}>Amount</Label>
              <Input
                style={_inner.give_input}
                color={config.dark_theme.color.description}
                value={amount.toString()}
                onChangeText={(e) => {
                  setAmount(e);
                }}
              />
            </Item>
            <TouchableOpacity style={_inner.item_card}>
              <Image
                style={_inner.currency_small}
                source={require('../../../assets/images/payment_systems/rt.png')}
              />
              <Text style={styles.option_description}>
                {selectedCurrency.name}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={_inner.row2}>
            <Text style={_inner.description_title}>Balance : </Text>
            <Text style={_inner.description_title}>
              {wallet[selectedCurrency.em]} {selectedCurrency.symbol}{' '}
            </Text>
          </View>
          <View style={_inner.row}>
            <Item floatingLabel style={_inner.get_item}>
              <Label style={_inner.get_label}>Total</Label>
              <Input
                style={_inner.get_input}
                color={config.dark_theme.color.description}
                value={(amount * (1 + fee.deposit)).toFixed(4).toString()}
              />
            </Item>
            <TouchableOpacity
              style={_inner.item_card}
              onPress={() => {
                openModal();
              }}>
              <Image
                style={_inner.currency_small}
                source={payment_system.iconUri}
              />
              <Text style={styles.option_description}>
                {payment_system.name}
              </Text>
              <Text style={styles.option_description}>
                {selectedCurrency.name}
              </Text>
            </TouchableOpacity>
          </View>
        </Form>
        <Button
          mode="outlined"
          color={config.dark_theme.third}
          style={_inner.outlined_button2}
          disabled={amount < 1.5 ? true : false}
          onPress={() => {
            props.navigation.navigate('add-confirm', {
              currency: selectedCurrency,
              payment_system: payment_system,
              amount: (amount * (1 + fee.deposit)).toFixed(4),
            });
          }}>
          Add {amount} {selectedCurrency.symbol}
        </Button>
      </View>
      <Modal
        visible={visible}
        onDismiss={closeModal}
        contentContainerStyle={_inner.modal}>
        <View style={_inner.row}>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              setSelectCurrency(currencies[0]);
              closeModal();
            }}>
            <Image
              style={_inner.currency_small}
              source={currencies[0].iconUri}
            />
            <Text style={styles.description_text}>{currencies[0].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              setSelectCurrency(currencies[1]);
              closeModal();
            }}>
            <Image
              style={_inner.currency_small}
              source={currencies[1].iconUri}
            />
            <Text style={styles.description_text}>{currencies[1].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              setSelectCurrency(currencies[2]);
              closeModal();
            }}>
            <Image
              style={_inner.currency_small}
              source={currencies[2].iconUri}
            />
            <Text style={styles.description_text}>{currencies[2].name}</Text>
          </TouchableOpacity>
        </View>
        <View style={_inner.row}>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              setSelectCurrency(currencies[3]);
              closeModal();
            }}>
            <Image
              style={_inner.currency_small}
              source={currencies[3].iconUri}
            />
            <Text style={styles.description_text}>{currencies[3].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={_inner.item_card}
            onPress={() => {
              setSelectCurrency(currencies[4]);
              closeModal();
            }}>
            <Image
              style={_inner.currency_small}
              source={currencies[4].iconUri}
            />
            <Text style={styles.description_text}>{currencies[4].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_inner.item_card}>
            <Text style={styles.description_text}>...</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AddDetail;

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
    // backgroundColor: 'red',
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
  form: {
    // backgroundColor: 'yellow',
    width: '100%',
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
    color: config.dark_theme.third,
  },
  give_item: {
    borderBottomColor: config.dark_theme.third,
    paddingBottom: 10,
    width: '60%',
  },
  get_input: {
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  get_label: {
    color: config.dark_theme.third,
  },
  get_item: {
    borderBottomColor: config.dark_theme.third,
    paddingBottom: 10,
    width: '60%',
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
  outlined_button2: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    borderWidth: 1,
    margin: '2%',
    borderColor: config.dark_theme.third,
    alignSelf: 'center',
  },
  modal: {
    backgroundColor: config.dark_theme.color.card,
    width: window.width * 0.9,
    height: window.height * 0.5,
    alignSelf: 'center',
    marginVertical: window.height * 0.1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    // alignItems: 'center',
  },
});
