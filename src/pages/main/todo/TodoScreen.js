import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

// import { Hello } from '../../../components/Hello'

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
        {/* <Hello name="zhuang" enthusiasmLevel={1} /> */}
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