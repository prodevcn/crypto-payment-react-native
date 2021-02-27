import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../constant/styles';
import config from '../constant/config';
import {Form, Input, Label, Item, Icon, Textarea} from 'native-base';

const CreateTicket = (props) => {
  const [subject, setSubject] = useState(null);
  const [operationId, setId] = useState(null);
  const [message, setMessage] = useState(null);
  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView>
        <View style={_inner.container}>
          <View>
            <Text style={_inner.title}>NEW TICKET</Text>
            <Form>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>subject</Label>
                <Input
                  style={styles.default_input}
                  color={config.dark_theme.color.description}
                  value={subject}
                  onChangeText={(e) => {
                    setSubject(e);
                  }}
                />
              </Item>
              <Item floatingLabel style={_inner.item}>
                <Label style={_inner.label}>operation ID</Label>
                <Input
                  style={styles.default_input}
                  textContentType="password"
                  color={config.dark_theme.color.description}
                  value={operationId}
                  onChangeText={(e) => {
                    setId(e);
                  }}
                />
              </Item>
              <Textarea
                rowSpan={5}
                bordered
                placeholder="message"
                style={_inner.textarea}
                placeholderTextColor={config.dark_theme.third}
              />
            </Form>
          </View>
          <View>
            <Button
              mode="contained"
              color={config.dark_theme.third}
              style={styles.outlined_button2}>
              send
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateTicket;

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
  text_btn: {
    alignSelf: 'flex-end',
    marginTop: '5%',
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
  textarea: {
    marginTop: '10%',
    borderColor: config.dark_theme.third,
    color: config.dark_theme.color.description,
  },
});
