import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  ViewStyle,
  FlatList,
} from 'react-native'

import {
  NavigationInjectedProps,
  NavigationScreenProp,
} from 'react-navigation'

import ArticleBannerView from './ArticleBannerView'
import ArticleItemView from './ArticleItemView'

import {
  getBanner,
  BannerItem,
  getArticleList,
  ArticleItem,
} from '../../../apis'

import {
  CustomRefreshControl,
  LoadMoreView,
  LoadMoreViewType,
} from '../../../components'

import {
  gotoWebScreen,
} from '../../../pages'

interface Props {
} 

interface State {
  refreshing: boolean,
  
  bannerItems: BannerItem[],

  articlesLoadingType: LoadMoreViewType,
  articles: ArticleItem[],
}

export const ARTICLE_SCREEN_NAME = 'ArticleScreen'

export function gotoArticleScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(ARTICLE_SCREEN_NAME)
}

/**
 * 首页 - 文章页面
 */
export class ArticleScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '文章',
  }

  readonly state = {
    refreshing: false,

    bannerItems: Array<BannerItem>(),

    articlesLoadingType: 'normal' as LoadMoreViewType,
    articles: Array<ArticleItem>(),
  }

  pageNum = 0

  componentDidMount() {
    this.loadBanner()
    this.loadArticles(true)
  }

  /**
   * 加载首页 Banner 数据
   */
  loadBanner() {
    getBanner().then(banner => {
      this.setState({
        bannerItems: [...banner.data]
      })
    })
  }

  /**
   * 加载首页文章列表
   * 
   * @param isRefresh true 重新加载；false 加载更多
   */
  loadArticles(isRefresh: boolean) {
    const { refreshing, articlesLoadingType } = this.state
    if (refreshing || articlesLoadingType == 'loading') {
      console.log('正在加载中，请稍后尝试')
      return
    }
    if (isRefresh) {
      this.setState({ refreshing: true})
    } else {
      this.setState({ articlesLoadingType: 'loading'})
    }
    // 加载第一页或下一页数据
    let nextPageNum = 0
    if (!isRefresh && this.pageNum != 0) {
      nextPageNum = this.pageNum + 1
    }
    console.log(`开始加载 nextPageNum = ${nextPageNum} 的数据`)
    getArticleList(nextPageNum).then(articleList => {
      this.pageNum = nextPageNum
      this.setState(prevState => {
        const tempArticles: ArticleItem[] = []
        if (!isRefresh) {
          tempArticles.push(...prevState.articles)
        }
        return {
          refreshing: false,
          articlesLoadingType: 'normal',
          articles: [...tempArticles, ...articleList.data.datas],
        }
      })
    }).catch(e => {
      console.log(e)
      this.setState({
        articlesLoadingType: 'error',
      })
    })
  }

  /**
   * 重新加载 Banner 数据和文章列表
   */
  onRefreshBannerAndArticles() {
    console.log('onRefreshBannerAndArticles')
    this.loadBanner()
    this.loadArticles(true)
  }

  /**
   * 文章列表项点击事件回调方法
   * @param {*} article 文章数据
   */
  onArticleItemPress(articleItem: ArticleItem) {
    gotoWebScreen(this.props.navigation, articleItem.title, articleItem.link)
  }

  /**
   * 轮播图项点击事件回调方法
   * @param {*} item 轮播图项数据
   */
  onBannerItemPress(bannerItem: BannerItem) {
    gotoWebScreen(this.props.navigation, bannerItem.title, bannerItem.url)
  }

  render() {
    const { refreshing, bannerItems, articlesLoadingType, articles } = this.state
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.flatList}
          data={articles}
          keyExtractor={(article: ArticleItem) => article.link}
          ListHeaderComponent={() => (
            <ArticleBannerView 
              bannerItems={bannerItems}
              onItemPress={(item) => this.onBannerItemPress(item)}
            />
          )}
          renderItem={({ item }) => (
            <ArticleItemView 
              articleItem={item} 
              onItemPress={articleItem => this.onArticleItemPress(articleItem)}
            />
          )}
          ListFooterComponent={ <LoadMoreView type={articlesLoadingType as LoadMoreViewType}/> }
          onEndReachedThreshold={1}
          onEndReached={() => this.loadArticles(false)}
          refreshControl={(
            <CustomRefreshControl 
              refreshing={refreshing}
              onRefresh={() => this.onRefreshBannerAndArticles()}
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
    flex: 1,
  }
});