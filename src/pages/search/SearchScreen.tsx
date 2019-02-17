import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native'

import {
  NavigationInjectedProps,
} from 'react-navigation'

import HotKeyView from './HotKeyView'
import InputView from './InputView'

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 页面：搜索
 */
export default class ArticleScreen extends Component<Props, State> {
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

const styles = StyleSheet.create<Styles>({
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