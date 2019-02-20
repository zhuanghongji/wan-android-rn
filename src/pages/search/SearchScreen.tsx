import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native'

import {
  NavigationInjectedProps,
  NavigationScreenProp,
} from 'react-navigation'

import { 
  getHotkey,
  Hotkey,
} from '../../apis'

import HotKeyView from './HotKeyView'
import InputView from './InputView'

interface Props {
}

interface State {
  text: string,
  hotkeys: Hotkey[],
}

export const SEARCH_SCREEN_NAME = 'SearchScreen'

export function gotoSearchScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(SEARCH_SCREEN_NAME)
}

/**
 * 页面：搜索
 */
export class SearchScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '搜索',
  }

  readonly state = {
    text: '',
    hotkeys: Array<Hotkey>(),
  }

  componentDidMount() {
    getHotkey().then(responses => {
      this.setState({
        hotkeys: [...responses.data],
      })
    }).catch(err => { 
      console.log('loadHotKey error', err)
  })
  }

  render() {
    const { text, hotkeys } = this.state
    return (
      <View style={styles.container}>
        <InputView 
          text={text}
          onChangeText={text => this.setState({ text })}
          onSearchPress={text => {
            console.log(text)
          }}
        />

        <Text style={styles.sectionTitle}>搜索热词</Text>
        <HotKeyView 
          hotkeys={hotkeys}
          onHotkeyPress={(item: Hotkey) => {
            this.setState({ text: item.name })
          }}
        />
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  sectionTitle: TextStyle,
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