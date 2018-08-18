import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

/**
 * 首页：导航
 */
export default class NavigationScreen extends Component {
  static navigationOptions = {
    title: '导航',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>导航</Text>
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