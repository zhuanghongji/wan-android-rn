import * as React from 'react'
import { 
  TouchableOpacity, 
  Image,
} from 'react-native';

import { 
  createSwitchNavigator,
} from 'react-navigation';

import {
  LOGIN_STACK_NAME,
  LoginStack,

  MAIN_STACK_NAME,
  MainStack,
} from './stacks'

export const RootStack = createSwitchNavigator(
  {
    [LOGIN_STACK_NAME]: LoginStack,
    [MAIN_STACK_NAME]: MainStack,
  }, {
    initialRouteName: LOGIN_STACK_NAME,
  }
)