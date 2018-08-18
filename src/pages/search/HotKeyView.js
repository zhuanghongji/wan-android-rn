import React, { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native'

import HttpManager from '../../http/HttpManager'

let screenWidth = Dimensions.get('window').width

export default class HotKeyView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotKey: [],
    }
  }

  componentDidMount() {
    this.loadHotKey()
  }

  /**
   * 加载 “搜索热词”
   */
  loadHotKey() {
    return HttpManager.get('/hotkey/json')
      .then(res => {
        this.setState({
          hotKey: res.data,
        })
      })
      .catch(err => { 
        console.log('loadHotKey error')
    })
  }

  onKeyPress(item) {
    this.props.onKeyPress(item)
  }

  renderHotKeyItem(item) {
    return (
      <TouchableOpacity 
        style={styles.hotKeyItem}
        onPress={() => {this.onKeyPress(item)}}
      >
        <Text style={styles.text} >{item.name}</Text>
      </TouchableOpacity>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={this.state.hotKey}
          keyExtractor={(key) => key.name}
          numColumns={3}
          renderItem={({ item }) => (
            this.renderHotKeyItem(item)
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    marginVertical: 12,
  },
  flatList: {
    width: screenWidth,
  },
  hotKeyItem: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    color: '#235C87'
  }
})