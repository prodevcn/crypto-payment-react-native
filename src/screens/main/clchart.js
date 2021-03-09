import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Dimensions,
  PixelRatio,
  requireNativeComponent,
  findNodeHandle,
  NativeModule,
} from 'react-native';

import {throttle} from 'lodash';
const {width, height} = Dimensions.get('window');
