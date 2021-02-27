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
import styles from '../../constant/styles';
import config from '../../constant/config';
import {useDispatch} from 'react-redux';
import {signupRequest} from '../../action/auth';
const UserAgreement = (props) => {
  const [description, setDescription] = useState(config.user_agreement);
  const dispatch = useDispatch();
  const goNext = () => {
    dispatch(signupRequest());
    props.navigation.navigate('signup-success');
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={_inner.container}>
        <View>
          <Text style={_inner.title}>USER AGREEMENT</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.description_text}>{description}</Text>
          </ScrollView>
        </View>
        <View>
          <Button
            mode="contained"
            color={config.dark_theme.login_btn}
            onPress={() => {
              goNext();
            }}>
            agree
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserAgreement;

const window = Dimensions.get('window');
const _inner = StyleSheet.create({
  title: {
    width: window.width * 0.8,
    fontFamily: config.dark_theme.font.primary,
    textAlign: 'center',
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
    width: window.width * 0.8,
    height: window.height * 0.8,
    marginBottom: window.height * 0.1,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  description: {
    width: '100%',
  },
});
