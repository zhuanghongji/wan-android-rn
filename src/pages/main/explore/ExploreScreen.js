import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

/**
 * 首页 - 发现页面
 */
export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: '发现',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>发现</Text>
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