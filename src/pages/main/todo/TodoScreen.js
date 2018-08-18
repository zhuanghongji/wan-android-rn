import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

/**
 * 首页 - 待办页面
 */
export default class ArticleScreen extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});