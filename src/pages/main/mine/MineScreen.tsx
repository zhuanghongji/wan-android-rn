import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 首页 - 我的页面
 */
export default class ArticleScreen extends Component<Props, State> {
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

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});