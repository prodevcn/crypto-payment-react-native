import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../constant/styles';
import config from '../../constant/config';
import Icon from 'react-native-vector-icons/FontAwesome5';
import network from '../../constant/network';
import {useSelector, useDispatch} from 'react-redux';
import {setFetched, setFetching} from '../../action/common';
import Toast from 'react-native-simple-toast';
import TransactionHistoryItem from '../../component/transaction_history_item';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ChangePassword = (props) => {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const [trxs, setTrxs] = useState([]);
  const {user} = useSelector((state) => state.user);
  useEffect(() => {
    getTransactions();
  });
  const getTransactions = () => {
    dispatch(setFetching());
    const url = network.base_url + '/transfer/get-all-transaction';
    network.headers.Authorization = user.token;
    fetch(url, {
      method: 'POST',
      headers: network.headers,
      body: JSON.stringify({user: user}),
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (!resJson.msg) {
          setTrxs(resJson);
        } else {
          Toast.show('There is charge history', Toast.LONG, Toast.TOP);
        }
        dispatch(setFetched());
      })
      .catch((err) => {
        dispatch(setFetched());
        console.error(err);
      });
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <Text style={_inner.title}>History</Text>
        {trxs.length !== 0 ? (
          <FlatList
            style={_inner.charge_history_area}
            data={trxs}
            renderItem={({item}) => (
              <TransactionHistoryItem data={item} id={item.id} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View>
            <Icon
              name="money-check-alt"
              size={window.width * 0.3}
              color={config.dark_theme.third}
              style={_inner.ticket}
            />
            <Text style={_inner.description}>
              You don't have any transactions
            </Text>
            <Text style={_inner.sub_description}>
              Make your first transaction
            </Text>
          </View>
        )}
        <View />
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    // width: window.width * 0.8,
    fontFamily: config.dark_theme.font.primary,
    textAlign: 'center',
    color: config.dark_theme.third,
    fontSize: window.width * 0.1,
    // textShadowOffset: {width: 2, height: 2},
    // textShadowColor: config.dark_theme.secondary,
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
    width: window.width * 0.9,
    height: window.height * 0.9,
    // backgroundColor: 'white',
    alignSelf: 'center',
  },
  description: {
    color: config.dark_theme.third,
    fontSize: 20,
    alignSelf: 'center',
  },
  sub_description: {
    color: config.dark_theme.color.description,
    alignSelf: 'center',
  },
  charge_history_area: {
    // backgroundColor: 'red',
    width: '100%',
    height: 200,
    // height: window.height * 0.1,
  },
});
