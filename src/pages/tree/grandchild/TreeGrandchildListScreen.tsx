import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ViewStyle,
} from 'react-native'

import {
  NavigationInjectedProps,
  NavigationScreenOptions,
} from 'react-navigation'

import {
  ArticleList,
  ArticleItem,
  getArticleListByCid,
} from '../../../apis'

import TreeGrandchildItemView from './TreeGrandchildItemView'
import {  
  LoadMoreView,
  LoadMoreViewType,
  CustomRefreshControl,
} from '../../../components'

interface Props {
}

interface State {
  refreshing: boolean;
  articles: ArticleItem[];
  articlesLoadingType: LoadMoreViewType;
}

type NavigationOptions = (navigation: NavigationInjectedProps ) => NavigationScreenOptions

/**
 * 页面：体系二级列表
 */
export default class TreeGrandchildListScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions: NavigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
    }
  }

  cid = ''
  pageNum = 0

  readonly state = {
    refreshing: false,
    articles: Array<ArticleItem>(),
    articlesLoadingType: 'normal' as LoadMoreViewType,
  }

  componentDidMount() {
    const { navigation } = this.props
    this.cid = navigation.getParam('cid', '')
    this.loadTreeArticles(true)
  }

  /**
   * 文章列表项点击事件回调方法
   * @param {*} article 文章数据
   */
  onArticlePress(article: ArticleItem) {
    this.props.navigation.navigate('Web', {
      title: article.title,
      url: article.link,
    })
  }

  /**
   * 加载 “体系” 数据
   */
  loadTreeArticles(isRefresh: boolean) {
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
    console.log(`开始加载 nextPageNum = ${nextPageNum} 的数据, cid = ${this.cid}`)
    getArticleListByCid(nextPageNum, this.cid).then(response => {
      this.pageNum = nextPageNum
      this.setState(prevState => {
        const tempArticles: ArticleItem[] = []
        if (!isRefresh) {
          tempArticles.push(...prevState.articles)
        }
        return {
          refreshing: false,
          articlesLoadingType: 'normal',
          articles: [...tempArticles, ...response.data.datas],
        }
      })
    }).catch(e => {
      console.log(e)
    })
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
    const { refreshing, articles, articlesLoadingType } = this.state
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.flatList}
          data={articles}
          keyExtractor={(item) => item.link}
          renderItem={({ item }) => (
            <TreeGrandchildItemView 
              article={item} 
              onArticlePress={(article) => this.onArticlePress(article)}
            />
          )}
          ListFooterComponent={ <LoadMoreView type={articlesLoadingType as LoadMoreViewType}/> }
          onEndReached={() => this.loadTreeArticles(false)}
          onEndReachedThreshold={1}
          refreshControl={
            <CustomRefreshControl
              refreshing={refreshing}
              onRefresh={() => this.loadTreeArticles(true)}
            />
          }
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