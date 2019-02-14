import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native'

let screenWidth = Dimensions.get('window').width

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 组件：体系一级列表，标题及其子项
 */
export default class TreeChildView extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.child = props.child
  }

  /**
   * 点击 “绘制二级目录下的项” 的回调
   * @param {*} grandchild 
   */
  onGrandchildPress(grandchild) {
    this.props.onGrandchildPress(grandchild)
  }

  /**
   * 绘制二级目录下的项
   * @param {*} item 
   */
  renderGrandchild(item) {
    // console.log('renderGrandchild', item.name)
    return (
      <TouchableOpacity 
        style={styles.grandchildWrapper}
        onPress={() => this.onGrandchildPress(item)}
      >
        <Text style={styles.grandchildName}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.childWrapper}>
            <Text style={styles.childName}>{this.child.name}</Text>
          </View>

          <FlatList
            style={styles.flatList}
            data={this.props.child.children}
            keyExtractor={(grandchild) => grandchild.name}
            numColumns={3}
            renderItem={({ item }) => this.renderGrandchild(item)}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: screenWidth,
  },
  childWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: screenWidth,
    backgroundColor: '#efefef',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  childName: {
    color: 'gray',
  },
  flatList: {
    width: screenWidth,
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