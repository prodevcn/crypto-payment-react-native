/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Text,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../constant/styles';
import config from '../../constant/config';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import network from '../../constant/network';
import {setFetched, setFetching} from '../../action/common';
import Toast from 'react-native-simple-toast';
import {Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const sketchDescription = (letter) => {
  const text = letter.slice(0, 120);
  return text;
};
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const Message = (props) => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({});
  const {user} = useSelector((state) => state.user);
  const {fetching} = useSelector((state) => state.common);
  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = useState(false);
  const showMessage = (msg) => {
    setMessage(msg);
    setVisible(true);
  };
  const closeMessage = () => setVisible(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getMessages();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const getMessages = () => {
    const url = network.base_url + '/message/get-message';
    dispatch(setFetching());
    network.headers.Authorization = user.token;
    fetch(url, {
      method: 'POST',
      headers: network.headers,
      body: JSON.stringify({user: user}),
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (!resJson.msg) {
          setMessages(resJson);
        } else {
          Toast.show('There is no message', Toast.LONG, Toast.TOP);
        }
        dispatch(setFetched());
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      {fetching && (
        <ActivityIndicator
          size="large"
          color={config.dark_theme.third}
          style={_inner.activity}
        />
      )}
      <View style={_inner.container}>
        <Text style={_inner.title}>MESSAGES</Text>
        <ScrollView
          contentContainerStyle={_inner.section}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor={config.dark_theme.third}
            />
          }>
          {messages.length !== 0 ? (
            messages.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.message}
                  key={index}
                  onPress={() => {
                    showMessage(item);
                  }}>
                  <Text style={_inner.message}>
                    {sketchDescription(item.description)}
                  </Text>
                  <View style={_inner.message_info}>
                    <View style={_inner.reduce_btn}>
                      <Text style={_inner.reduce_btn}>...</Text>
                    </View>
                    <Text style={_inner.message_date}>{item.created_time}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View style={_inner.message_logo}>
              <Icon
                name="message-alert-outline"
                color={config.dark_theme.third}
                size={window.width * 0.3}
              />
              <Text style={styles.description}>NO MESSAGE</Text>
            </View>
          )}
        </ScrollView>
      </View>
      <Modal
        visible={visible}
        onDismiss={closeMessage}
        contentContainerStyle={_inner.modal}>
        <Text style={_inner.message_title}>{message.title}</Text>
        <Text style={_inner.detail_date}>{message.created_time}</Text>
        <ScrollView
          contentContainerStyle={_inner.modal_scroll}
          showsVerticalScrollIndicator={false}>
          <Text style={_inner.message_date}>{message.description}</Text>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default Message;

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
  message: {
    paddingHorizontal: 10,
    color: config.dark_theme.color.disabled,
  },
  message_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  reduce_btn: {
    color: config.dark_theme.color.disabled,
    backgroundColor: config.dark_theme.primary,
    borderRadius: 100,
    paddingHorizontal: 5,
  },
  section: {
    // backgroundColor: 'yellow',
  },
  message_date: {
    color: config.dark_theme.color.description,
  },
  activity: {
    top: '50%',
  },
  modal: {
    backgroundColor: config.dark_theme.color.card,
    width: window.width * 0.8,
    height: window.height * 0.4,
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 20,
  },
  modal_scroll: {
    width: '100%',
    paddingHorizontal: 20,
    // height:
  },
  detail_date: {
    // color: config.dark_theme.third,
    color: config.dark_theme.color.disabled,
    marginHorizontal: 20,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  message_title: {
    color: config.dark_theme.third,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  message_logo: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: window.height * 0.2,
  },
});
