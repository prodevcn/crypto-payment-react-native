import {StyleSheet, Dimensions} from 'react-native';
import config from './config';
import conf from './config';
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: conf.dark_theme.primary,
    width: window.width,
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
  logo: {
    width: window.width * 0.8,
    height: window.width * 0.8,
  },
  default_button: {
    backgroundColor: conf.dark_theme.secondary,
    width: '100%',
    padding: '5%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  outlined_button: {
    width: '100%',
    borderWidth: 1,
    margin: '2%',
    borderColor: conf.dark_theme.secondary,
    alignSelf: 'center',
  },
  outlined_button2: {
    width: '100%',
    borderWidth: 1,
    margin: '2%',
    borderColor: conf.dark_theme.third,
    alignSelf: 'center',
  },
  outlined_button3: {
    // width: '100%',
    borderWidth: 1,
    margin: '2%',
    borderColor: conf.dark_theme.third,
    alignSelf: 'center',
  },
  default_input: {
    backgroundColor: 'transparent',
    borderColor: conf.dark_theme.third,
    color: 'red',
  },
  description: {
    color: conf.dark_theme.third,
  },
  sub_title: {
    color: conf.dark_theme.color.description,
    fontSize: 24,
    alignSelf: 'center',
    marginVertical: 20,
  },
  description_text: {
    color: conf.dark_theme.color.description,
  },
  section_title: {
    color: config.dark_theme.third,
    marginLeft: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: config.dark_theme.color.card,
    borderRadius: 10,
    paddingVertical: 10,
    width: '100%',
  },
  option_item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  half_section: {
    width: '50%',
    alignItems: 'flex-start',
  },
  option_title: {
    color: config.dark_theme.color.disabled,
  },
  option_description: {
    color: config.dark_theme.color.description,
  },
  text_up: {
    color: config.dark_theme.color.up,
  },
  text_down: {
    color: config.dark_theme.color.down,
  },
  message: {
    backgroundColor: config.dark_theme.color.card,
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
    width: '100%',
  },
  btn_rounded: {
    backgroundColor: config.dark_theme.color.card,
    padding: 5,
    borderRadius: 100,
  },
});

export default styles;
