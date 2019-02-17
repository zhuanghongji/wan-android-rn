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
 * 页面：常用网站
 */
export default class SitesScreen extends Component<Props, State> {
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

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});