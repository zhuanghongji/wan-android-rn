import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  WebView,
} from 'react-native'

import {
  NavigationScreenProps,
  NavigationInjectedProps,
} from 'react-navigation'

import {
  dimensions,
} from '../../res'

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 网页页面
 */
export default class WebScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions: any = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
      headerBackTitle: '',
    }
  }

  render() {
    const { navigation } = this.props
    const url = navigation.getParam('url', '')

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