import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native'

import {
  dimensions,
} from '../../res'

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 组件：搜索输入框
 */
export default class HotKeyView extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  onSearchPress(text) {
    this.props.onSearchPress(text)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'searchInput'}
          style={styles.textInput}
          placeholder={'请输入搜索关键字..'}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={() => {this.onSearchPress(this.state.text)}}
        >
          <Text style={styles.searchButtonText} >搜索</Text>
        </TouchableOpacity>
      </View>
    )
  }
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