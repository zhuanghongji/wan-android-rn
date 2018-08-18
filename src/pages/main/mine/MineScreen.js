import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

/**
 * 首页 - 我的页面
 */
export default class ArticleScreen extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});