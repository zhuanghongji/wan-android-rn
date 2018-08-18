import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

/**
 * 首页：项目
 */
export default class ProjectScreen extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});