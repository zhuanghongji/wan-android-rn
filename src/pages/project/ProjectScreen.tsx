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
} from 'react-navigation'

import { Hotkey } from '../../apis'

interface Props {
}

interface State {
}

/**
 * 首页：项目
 */
export default class ProjectScreen extends Component<Props & NavigationInjectedProps, State> {
  static navigationOptions = {
    title: '项目',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>项目</Text>
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