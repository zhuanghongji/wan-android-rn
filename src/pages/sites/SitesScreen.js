import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

/**
 * 页面：常用网站
 */
export default class SitesScreen extends Component {
  static navigationOptions = {
    title: '常用网站',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>常用网站</Text>
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