import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../constant/config';
import styles from '../../constant/styles';
import {useDispatch, useSelector} from 'react-redux';
import {createPin} from '../../action/auth';

const CreatePin = (props) => {
  const [item, setItem] = useState(['', '', '', '']);
  const [isComplete, setComState] = useState(false);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const {fetching} = useSelector((state) => state.common);
  const {user} = useSelector((state) => state.user);

  const onUpdateItems = (e) => {
    if (index < 4) {
      let newArray = [...item];
      newArray[index] = e;
      setItem(newArray);
      setIndex(index + 1);
      if (index === 3) {
        setComState(true);
      }
    }
  };
  const backspace = () => {
    if (index !== 0) {
      let newArray = [...item];
      setIndex(index - 1);
      newArray[index - 1] = '';
      setItem(newArray);
      setComState(false);
    }
  };

  const goMain = () => {
    dispatch(createPin(user, item));
  };

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
        <View>
          <Text style={_inner.title}>CREATE PIN CODE</Text>
          <Text style={_inner.description}>Please remember secret word.</Text>
          <View style={_inner.pin_code}>
            <Text style={_inner.pin_element}> {item[0]} </Text>
            <Text style={_inner.pin_element}> {item[1]} </Text>
            <Text style={_inner.pin_element}> {item[2]}</Text>
            <Text style={_inner.pin_element}> {item[3]} </Text>
          </View>
        </View>
        <View>
          <View style={_inner.keyboard}>
            <View style={_inner.row}>
              <Button
                mode="outlined"
                color={config.dark_theme.third}
                style={_inner.keyEntry}
                onPress={() => {
                  onUpdateItems('1');
                }}>
                1
              </Button>
              <Button
                mode="outlined"
                color={config.dark_theme.third}
                style={_inner.keyEntry}
                onPress={() => {
                  onUpdateItems('2');
                }}>
                <Text style={_inner.keyText}>2</Text>
              </Button>
              <Button
                mode="outlined"
                color={config.dark_theme.third}
                style={_inner.keyEntry}
                onPress={() => {
                  onUpdateItems('3');
                }}>
                <Text style={_inner.keyText}>3</Text>
              </Button>
            </View>
            <View style={_inner.row}>
              <Button
                mode="outlined"
                color={config.dark_theme.third}
                style={_inner.keyEntry}
                onPress={() => {
                  onUpdateItems('4');
                }}>
                <Text style={_inner.keyText}>4</Text>
              </Button>
              <Button
                mode="outlined"
                color={config.dark_theme.third}
                style={_inner.keyEntry}
                onPress={() => {
                  onUpdateItems('5');
                }}>
                <Text style={_inner.keyText}>5</Text>
              </Button>
              <Button
                mode="outlined"
                color={config.dark_theme.third}
                style={_inner.keyEntry}
                onPress={() => {
                  onUpdateItems('6');
                }}>
                <Text style={_inner.keyText}>6</Text>
              </Button>
            </View>
            {isComplete ? (
              <View style={_inner.row}>
                <Button
                  mode="outlined"
                  color={config.dark_theme.secondary}
                  style={_inner.keyEntry3}
                  onPress={() => {
                    goMain();
                  }}>
                  <Text style={_inner.keyText}>create pin code</Text>
                </Button>
              </View>
            ) : (
              <View style={_inner.row}>
                <Button
                  mode="outlined"
                  color={config.dark_theme.third}
                  style={_inner.keyEntry}
                  onPress={() => {
                    onUpdateItems('7');
                  }}>
                  <Text style={_inner.keyText}>7</Text>
                </Button>
                <Button
                  mode="outlined"
                  color={config.dark_theme.third}
                  style={_inner.keyEntry}
                  onPress={() => {
                    onUpdateItems('8');
                  }}>
                  <Text style={_inner.keyText}>8</Text>
                </Button>
                <Button
                  mode="outlined"
                  color={config.dark_theme.third}
                  style={_inner.keyEntry}
                  onPress={() => {
                    onUpdateItems('9');
                  }}>
                  <Text style={_inner.keyText}>9</Text>
                </Button>
              </View>
            )}
            <View style={_inner.row}>
              <Button
                mode="outlined"
                color={config.dark_theme.third}
                style={_inner.keyEntry2}
                onPress={() => {
                  backspace();
                }}>
                <Icon
                  name="arrow-left"
                  side={20}
                  color={config.dark_theme.secondary}
                />
              </Button>
              <Button
                mode="outlined"
                color={config.dark_theme.third}
                style={_inner.keyEntry}
                onPress={() => {
                  onUpdateItems('0');
                }}>
                <Text style={_inner.keyText}>0</Text>
              </Button>
              <Button
                mode="outlined"
                color={config.dark_theme.secondary}
                style={_inner.keyEntry2}
                onPress={() => {
                  props.navigation.navigate('signup-success');
                }}>
                <Icon
                  name="home"
                  side="20"
                  color={config.dark_theme.secondary}
                />
              </Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePin;

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
  text_btn: {
    alignSelf: 'flex-end',
    marginTop: '5%',
  },
  container: {
    width: window.width * 0.8,
    height: window.height * 0.8,
    marginTop: window.height * 0.1,
    marginBottom: window.height * 0.1,
    // backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pin_code: {
    // backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  pin_element: {
    width: '22%',
    height: '100%',
    color: config.dark_theme.color.description,
    borderBottomColor: config.dark_theme.third,
    borderBottomWidth: 2,
    fontSize: 36,
    textAlign: 'center',
  },
  keyboard: {
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  description: {
    color: config.dark_theme.secondary,
    alignSelf: 'center',
  },
  activity: {
    top: '50%',
  },
});
