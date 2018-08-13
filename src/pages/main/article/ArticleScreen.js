import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'


export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: '文章',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>文章</Text>
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