import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  WebView,
  ViewStyle,
  Alert,
} from 'react-native'

import {
  NavigationInjectedProps, 
  NavigationScreenOptions,
  NavigationScreenProp,
} from 'react-navigation'

import {
  dimensions,
} from '../../res'

interface Props {
}

interface State {
}

type NavigationOptions = (navigation: NavigationInjectedProps ) => NavigationScreenOptions

const PARAM_TITLE = 'title'
const PARAM_URL = 'url'

export const WEB_SCREEN_NAME = 'WebScreen'

export function gotoWebScreen(navigation: NavigationScreenProp<any>, title: string, url: string) {
  navigation.navigate(WEB_SCREEN_NAME, {
    [PARAM_TITLE]: title,
    [PARAM_URL]: url,
  })
}

/**
 * 网页页面
 */
export class WebScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions: NavigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam(PARAM_TITLE, ''),
      headerBackTitle: '',
    }
  }

  render() {
    const { navigation } = this.props
    const url = navigation.getParam(PARAM_URL, '')

    return (
      <View style={styles.container}>
        <WebView
          style={styles.web}
          source={{ uri: url }}
        />
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  web: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  web: {
    width: dimensions.screenWidth,
    height: dimensions.screenHeight,
  }
});