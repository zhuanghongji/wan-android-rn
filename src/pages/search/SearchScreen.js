import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native'

import HotKeyView from './HotKeyView'
import InputView from './InputView'

/**
 * 搜索页面
 */
export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: '搜索'
  }

  render() {
    return (
      <View style={styles.container}>
        <InputView 
          onSearchPress={(text) => {
            alert(text)
          }}
        />

        <Text style={styles.sectionTitle}>搜索热词</Text>
        <HotKeyView 
          onKeyPress={(item) => {
            alert(item.name)
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#EFEFEF',
  },
  sectionTitle: {
    marginTop: 12,
    marginLeft: 12,
    color: 'black',
  }
});