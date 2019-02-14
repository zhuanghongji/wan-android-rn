import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native'

import HttpManager from '../../../http/HttpManager'
import TreeChildView from './TreeChildItemView'

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 页面：体系
 */
export default class TreeScreen extends Component<Props, State> {
  static navigationOptions = {
    title: '体系',
  }

  constructor(props) {
    super(props)
    this.state = {
      tree: [],
    }
  }

  componentDidMount() {
    this.loadTreeJson()
  }

  /**
   * 加载 “体系” 数据
   */
  loadTreeJson() {
    return HttpManager.get('/tree/json')
      .then(res => {
        console.log('loadTreeJson success')
        this.setState({
          tree: res.data,
        })
      })
      .catch(err => { 
        console.log('loadTreeJson error')
    })
  }

  /**
   * 点击了 “体系下二级目录的子项”
   * 
   * @param {*} grandchild 
   */
  onGrandchildPress(grandchild) {
    alert(grandchild.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={this.state.tree}
          keyExtractor={(treeChind) => treeChind.name}
          renderItem={({ item }) => (
            <TreeChildView 
              child={item} 
              onGrandchildPress={(grandchild) => {this.onGrandchildPress(grandchild)}}
            />
          )}
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
  flatList: {
    flex: 1
  }
});