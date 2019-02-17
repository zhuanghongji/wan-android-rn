import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import {
  NavigationInjectedProps,
} from 'react-navigation'

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 首页：项目
 */
export default class ProjectScreen extends Component<Props, State> {
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

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});