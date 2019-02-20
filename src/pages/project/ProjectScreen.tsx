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

export const PROJECT_SCREEN_NAME = 'ProjectScreen'

export function gotoProjectScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(PROJECT_SCREEN_NAME)
}

/**
 * 首页：项目
 */
export class ProjectScreen extends Component<Props & NavigationInjectedProps, State> {
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