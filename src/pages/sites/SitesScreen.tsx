import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
} from 'react-native'

import {
  NavigationInjectedProps,
  NavigationScreenProp,
} from 'react-navigation'

interface Props {
}

interface State {
}

export const SITES_SCREEN_NAME = 'SitesScreen'

export function gotoSitesScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(SITES_SCREEN_NAME)
}

/**
 * 页面：常用网站
 */
export class SitesScreen extends Component<Props & NavigationInjectedProps, State> {
  
  static navigationOptions = {
    title: '常用网站',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>常用网站</Text>
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});