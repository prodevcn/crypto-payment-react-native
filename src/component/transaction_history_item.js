import React, {useState} from 'react';
import styles from '../constant/styles';
import config from '../constant/config';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import currencies from '../constant/currency';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
const TransactionHistoryItem = (props) => {
  const [info, setInfo] = useState(props.data);
  const [id, setId] = useState(props.id);
  const {user} = useSelector((state) => state.user);
  return (
    <View style={_inner.card}>
      {currencies.map((item, index) => {
        if (item.em === info.currency) {
          return (
            <View style={_inner.card_info}>
              <Image source={item.iconUri} style={_inner.currency_small} />
              <View>
                <Text style={styles.description_text}>
                  ID: {props.id} / Type : {info.type}
                </Text>
                {info.receiver_account_number === user.account_number && (
                  <Text style={_inner.amount_text}>
                    + {item.symbol} {info.amount}
                  </Text>
                )}

                {info.sender_account_number === user.account_number && (
                  <Text style={_inner.amount_text_down}>
                    - {item.symbol} {info.amount}
                  </Text>
                )}
                <Text style={styles.description_text}>
                  Date : {new Date(info.created_time).getFullYear()}-
                  {new Date(info.created_time).getMonth() + 1}-
                  {new Date(info.created_time).getDate()}
                </Text>
              </View>
            </View>
          );
        }
      })}
      {info.done ? (
        <Icon
          name="check-circle-outline"
          size={32}
          color={config.dark_theme.color.up}
        />
      ) : (
        <Icon name="autorenew" size={32} color={config.dark_theme.color.up} />
      )}
    </View>
  );
};

export default TransactionHistoryItem;

const {width, height} = Dimensions.get('window');
const _inner = StyleSheet.create({
  card: {
    width: width * 0.9,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: config.dark_theme.color.card,
    marginBottom: 20,
    borderRadius: 10,
  },
  card_info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount_text: {
    color: config.dark_theme.color.up,
    fontSize: 22,
  },
  amount_text_down: {
    color: config.dark_theme.color.down,
    fontSize: 22,
  },
  currency_small: {
    width: height * 0.07,
    height: height * 0.07,
    marginRight: 10,
  },
});
