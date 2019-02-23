import * as React from 'react'
import { 
  TouchableOpacity, 
  Image,
} from 'react-native';

import { 
  createStackNavigator,
  NavigationScreenProp,
  BottomTabNavigatorConfig,
  NavigationTabRouterConfigBase,
  NavigationInjectedProps,
  NavigationScreenOptions,
  NavigationTabScreenOptionsBase,
} from 'react-navigation';

import {
  colors,
  images,
} from '../res'


import {
  LOGIN_SCREEN_NAME,
  LoginScreen,
} from '../pages'

const LOGIN_STACK_NAME = 'LoginStack'

function gotoLoginStack(navigation: NavigationScreenProp<any>) {
  navigation.navigate(LOGIN_STACK_NAME)
}

/**
 * 首页 Tab 导航器
 */
const LoginStack = createStackNavigator(
  {
    [LOGIN_SCREEN_NAME]: LoginScreen,
  }, {
    navigationOptions: {
      headerTintColor: colors.black,
    }
  }
)

export {
  LOGIN_STACK_NAME,
  gotoLoginStack,
  LoginStack,
}