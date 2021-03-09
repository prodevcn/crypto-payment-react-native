import React from 'react';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import store from './src/store';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5Pro';
import {Root} from 'native-base';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2b323b',
    accent: '#fc427b',
  },
};

export default () => {
  return (
    <Provider store={store}>
      <PaperProvider
        theme={theme}
        settings={{icon: (props) => <AwesomeIcon {...props} />}}>
        <Root>
          <MainNavigation />
        </Root>
      </PaperProvider>
    </Provider>
  );
};
