import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  ViewStyle,
  TextStyle,
} from 'react-native'

import {
  dimensions,
} from '../../../res'

import {
  Tree,
  Children,
} from '../../../apis'

interface Props {
  tree: Tree,
  onChildrenPress: (children: Children) => void,
}

interface State {
}

/**
 * 组件：体系一级列表，标题及其子项
 */
export default class TreeChildView extends Component<Props, State> {

  /**
   * 绘制二级目录下的项
   * @param {*} item 
   */
  renderChildren(children: Children) {
    const { onChildrenPress } = this.props
    return (
      <TouchableOpacity 
        style={styles.grandchildWrapper}
        onPress={() => onChildrenPress(children)}
      >
        <Text style={styles.grandchildName}>{children.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { tree } = this.props
    return (
        <View style={styles.container}>
          <View style={styles.childWrapper}>
            <Text style={styles.childName}>{tree.name}</Text>
          </View>

          <FlatList
            style={styles.flatList}
            data={tree.children}
            keyExtractor={(item) => item.name}
            numColumns={3}
            renderItem={({ item }) => this.renderChildren(item)}
          />
        </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  childWrapper: ViewStyle,
  childName: TextStyle,
  flatList: ViewStyle,
  grandchildWrapper: ViewStyle,
  grandchildName: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: dimensions.screenWidth,
  },
  childWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: dimensions.screenWidth,
    backgroundColor: '#efefef',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  childName: {
    color: 'gray',
  },
  flatList: {
    width: dimensions.screenWidth,
    paddingVertical: 8,
    backgroundColor: '#ffffff'
  },
  grandchildWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#235C87',
    borderRadius: 14,
  },
  grandchildName: {
    color: '#235C87',
  },
})