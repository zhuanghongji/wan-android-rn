import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'

let screenWidth = Dimensions.get('window').width

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 组件：体系二级列表，列表项
 */
export default class TreeGrandchildItemView extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.articleItem = props.articleItem
  }

  onItemPress() {
    this.props.onItemPress(this.articleItem)
  }

  

  render() {
    let icHead = require('../../../assets/icon/ic_man.png')
    let icLike = this.articleItem.collect 
      ? require('../../../assets/icon/ic_like_true.png') 
      : require('../../../assets/icon/ic_like_false.png')

    return (
      <TouchableOpacity onPress={() => this.onItemPress()}>
        <View style={styles.container}>
          <View style={styles.rowTop}>
            <Image style={styles.like} source={icHead} ></Image>
            <Text style={styles.txtAuthor} >{this.articleItem.author}</Text>
            <View style={{ flex: 1 }}></View>
            <Text style={styles.txtNiceDate} >{this.articleItem.niceDate}</Text>
          </View>

          <View style={styles.rowMiddle}>
            <Text style={styles.txtTitle} >{this.articleItem.title}</Text>
          </View>

          <View style={styles.rowBottom}>
            <Text style={styles.txtchapterName} >{this.articleItem.chapterName}</Text>
            <View style={{ flex: 1 }}></View>
            <Image style={styles.like} source={icLike} ></Image>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: screenWidth - 24,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 8,
    marginBottom: 0,
    padding: 8,
  },
  rowTop: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowMiddle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
  },
  rowBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtAuthor: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 8,
  },
  txtNiceDate: {
    fontSize: 12,
    color: 'gray'
  },
  txtTitle: {
    fontSize: 14,
    color: 'black'
  },
  txtchapterName: {
    fontSize: 12,
    color: '#235C87'
  },
  header: {
    width: 32,
    height: 32,
  },
  like: {
    width: 18,
    height: 18,
  }
})