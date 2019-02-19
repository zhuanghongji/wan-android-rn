import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ViewStyle,
  TextStyle,
} from 'react-native'

import {
  dimensions,
} from '../../res'

interface Props {
  text: string;
  onChangeText: (text: string) => void;
  onSearchPress: (text: string) => void;
}

interface State {
}

/**
 * 组件：搜索输入框
 */
export default class HotKeyView extends Component<Props, State> {
  
  render() {
    const { text, onChangeText, onSearchPress } = this.props

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder={'请输入搜索关键字..'}
          onChangeText={text => onChangeText(text)}
          value={text}
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={() => onSearchPress(text)}
        >
          <Text style={styles.searchButtonText}>搜索</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  searchInput: ViewStyle,
  searchButton: ViewStyle,
  searchButtonText: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    width: dimensions.screenWidth - 24,
    height: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    marginHorizontal: 12,
    paddingLeft: 8,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
  },
  searchButton: {
    width: 56,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#235C87'
  },
  searchButtonText: {
    color: 'white',
  }
})