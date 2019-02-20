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

export const MINE_SCREEN_NAME = 'MineScreen'

export function gotoMineScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(MINE_SCREEN_NAME)
}

/**
 * 首页 - 我的页面
 */
export class MineScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '我的',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>我的</Text>
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