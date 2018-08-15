import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'

import Swiper from 'react-native-swiper'
import HttpManager from '../../../http/HttpManager'
import ArticleItemView from './ArticleItemView'

let Dimensions = require('Dimensions')
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height

export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: '文章',
  }

  constructor(props) {
    super(props)
    this.state = {
      banner: [],
      isLoadingArticles: false,
      pageNumber: 0,
      articles: [],
    }
  }

  componentDidMount() {
    this.loadBannerJson()
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
   * 加载首页 Banner 数据
   */
  loadBannerJson() {
    return HttpManager.get('/banner/json')
      .then(res => {
        console.log('loadBannerJson success')
        this.setState({
          banner: res.data,
        })
      })
      .catch(err => { 
        console.log('loadBannerJson error')
    })
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
   * 绘制 Banner Item 视图
   */
  renderBannerItemViews() {
    let items = this.state.banner
    let views = []
    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      views.push(
        <View style={styles.swiperSlide}>
          <Image style={styles.swipeImage} source={{ uri: item.imagePath }} />
        </View>
      )
    }
    return views
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
        <View style={styles.swiperWrapper}>
          <Swiper style={styles.swiper} autoplay={true}>
            { this.renderBannerItemViews() }
          </Swiper>
        </View>

        <FlatList 
          style={styles.flatList}
          data={this.state.articles}
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
  swiperWrapper: { 
    height: 180,
  },
  swiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  swipeImage: {
    width: ScreenWidth,
    height: 180,
  },
  flatList: {
    flex: 1
  }
});