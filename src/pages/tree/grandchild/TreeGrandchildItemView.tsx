import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native'

import {
  dimensions,
  images,
} from '../../../res'

import {
  ArticleItem,
} from '../../../apis'

interface Props {
  article :ArticleItem,
  onArticlePress: (article :ArticleItem) => void,
}

interface State {
}

/**
 * 组件：体系二级列表，列表项
 */
export default class TreeGrandchildItemView extends Component<Props, State> {

  render() {
    const { article, onArticlePress } = this.props
    let icHead = images.icMan
    let icLike = article.collect ? images.icLikeTrue : images.icLikeFalse

    return (
      <TouchableOpacity onPress={() => onArticlePress(article)}>
        <View style={styles.container}>
          <View style={styles.rowTop}>
            <Image style={styles.like} source={icHead} ></Image>
            <Text style={styles.txtAuthor} >{article.author}</Text>
            <View style={{ flex: 1 }}></View>
            <Text style={styles.txtNiceDate} >{article.niceDate}</Text>
          </View>

          <View style={styles.rowMiddle}>
            <Text style={styles.txtTitle} >{article.title}</Text>
          </View>

          <View style={styles.rowBottom}>
            <Text style={styles.txtchapterName} >{article.chapterName}</Text>
            <View style={{ flex: 1 }}></View>
            <Image style={styles.like} source={icLike} ></Image>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

interface Styles {
  container: ViewStyle,
  rowTop: ViewStyle,
  rowMiddle: ViewStyle,
  rowBottom: ViewStyle,
  txtAuthor: TextStyle,
  txtNiceDate: TextStyle,
  txtTitle: TextStyle,
  txtchapterName: TextStyle,
  header: ViewStyle,
  like: ImageStyle,
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
  header: {
    width: 32,
    height: 32,
  },
  like: {
    width: 18,
    height: 18,
  }
})