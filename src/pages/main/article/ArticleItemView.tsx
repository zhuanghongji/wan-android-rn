import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
  TextStyle,
  Image,
  ImageStyle,
} from 'react-native'


import {
  images,
  dimensions,
} from '../../../res'

interface Props {
  articleItem: ArticleItem,
  onItemPress: (_: ArticleItem) => void,
}

interface State {
}

interface Styles {
  container: ViewStyle,
  rowTop: ViewStyle,
  rowMiddle: ViewStyle,
  like: ImageStyle,
  rowBottom: ImageStyle,
  txtAuthor: TextStyle,
  txtNiceDate: TextStyle,
  txtTitle: TextStyle,
  txtchapterName: TextStyle,
}

interface ArticleItem {
  collect: boolean,
  author: string,
  niceDate: string,
  title: string,
  chapterName: string,
}

export default class ArticleItemView extends Component<Props, State>  {

  onItemPress(articleItem: ArticleItem) {
    this.props.onItemPress(articleItem)
  }

  render() {
    const { articleItem } = this.props
    let icHead = images.icMan
    let icLike = articleItem.collect ? images.icLikeTrue : images.icLikeFalse
    return (
      <TouchableOpacity onPress={() => this.onItemPress(articleItem)}>
        <View style={styles.container}>
          <View style={styles.rowTop}>
            <Image style={styles.like} source={icHead} ></Image>
            <Text style={styles.txtAuthor} >{articleItem.author}</Text>
            <View style={{ flex: 1 }}></View>
            <Text style={styles.txtNiceDate} >{articleItem.niceDate}</Text>
          </View>

          <View style={styles.rowMiddle}>
            <Text style={styles.txtTitle} >{articleItem.title}</Text>
          </View>

          <View style={styles.rowBottom}>
            <Text style={styles.txtchapterName} >{articleItem.chapterName}</Text>
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
    width: dimensions.screenWidth - 24,
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
  like: {
    width: 18,
    height: 18,
  }
})