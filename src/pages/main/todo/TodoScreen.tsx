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

export const TODO_SCREEN_NAME = 'TodoScreen'

export function gotoTodoScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(TODO_SCREEN_NAME)
}

/**
 * 首页 - 待办页面
 */
export class TodoScreen extends Component<Props & NavigationInjectedProps, State> {
  static navigationOptions = {
    title: '待办',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>待办</Text>
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