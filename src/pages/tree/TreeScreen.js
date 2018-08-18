import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

/**
 * 页面：体系
 */
export default class TreeScreen extends Component {
  static navigationOptions = {
    title: '体系',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>体系</Text>
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