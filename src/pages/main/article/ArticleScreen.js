import React, { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Button,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'

import HttpManager from '../../../http/HttpManager'
import ArticleBannerView from './ArticleBannerView'
import ArticleItemView from './ArticleItemView'

let screenWidth = Dimensions.get('window').width

export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: '文章',
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoadingArticles: false,
      pageNumber: 0,
      articles: [],
    }
  }

  componentDidMount() {
    this.loadArticles()
  }

  /**
   * 文章列表项点击事件
   * @param {*} article 文章数据
   */
  onArticleItemPress(article) {
    alert(article.title)
  }

  /**
   * 加载首页文章列表
   */
  loadArticles() {
    this.setState({
      isLoadingArticles: true
    })
    return HttpManager.get(`/article/list/${this.state.pageNumber}/json`)
      .then(res => {
        console.log('loadArticles success')
        let tempArticles = this.state.pageNumber == 0 ? [] : [...this.state.articles]
        this.setState({
          isLoadingArticles: false,
          articles: [...tempArticles, ...res.data.datas],
        })
      })
      .catch(err => { 
        console.log('loadArticles error')
    })
  }

  /**
   * 刷新文章列表
   */
  refreshArticles() {
    this.setState({
      pageNumber: 0,
    })
    this.loadArticles()
  }

  /**
   * 加载更多首页文章列表
   */
  loadMoreArticles() {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    })
    this.loadArticles()
  }

  /**
   * 绘制文章列表项的视图
   * @param {*} item 文章
   */
  renderFlatListItems(item) {
    return (
      <Text>{item.title}</Text>
    )
  }

  /**
   * 绘制 FlatList 上拉加载更多视图
   */
  renderLoadingView() {
    return (
      <View>
        <ActivityIndicator size={'small'} animating={true} />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.flatList}
          data={this.state.articles}
          ListHeaderComponent={() => <ArticleBannerView />}
          renderItem={({ item }) => (
            <ArticleItemView 
              articleItem={item} 
              onItemPress={(article) => this.onArticleItemPress(article)}
            />
          )}
          ListFooterComponent={() => this.renderLoadingView()}
          onEndReached={() => this.loadMoreArticles()}
          onEndReachedThreshold={1}
          refreshControl={
            <RefreshControl
              title={'正在加载..'}
              colors={['blue']}
              refreshing={this.state.isLoadingArticles}
              onRefresh={() => this.refreshArticles()}
            />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
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