import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  ViewStyle,
} from 'react-native'

import {
  NavigationInjectedProps,
} from 'react-navigation'

import {
  getTree,
  Tree,
  Children,
} from '../../../apis'

import HttpManager from '../../../http/HttpManager'
import TreeChildItemView from './TreeChildItemView'

interface Props {
}

interface State {
  trees: Tree[],
}

/**
 * 页面：体系一级列表
 */
export default class TreeChildScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '体系',
  }

  readonly state = {
    trees: Array<Tree>(),
  }

  componentDidMount() {
    // 加载 “体系” 数据
    getTree().then(response => {
      this.setState({
        trees: [...response.data],
      })
    }).catch(e => {
      console.log(e)
    })
  }

  /**
   * 点击了 “体系下二级目录的子项”
   * 
   * @param {*} children 
   */
  onChildrenPress(children: Children) {
    this.props.navigation.navigate('TreeGrandchild', {
      title: children.name,
      cid: children.id
    })
  }

  render() {
    const { trees } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={trees}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TreeChildItemView 
              tree={item} 
              onChildrenPress={children => this.onChildrenPress(children)}
            />
          )}
        />
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  flatList: ViewStyle,
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