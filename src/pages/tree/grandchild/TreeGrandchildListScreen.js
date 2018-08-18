import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'

import HttpManager from '../../../../src/http/HttpManager'
import TreeGrandchildItemView from './TreeGrandchildItemView'

/**
 * 页面：体系二级列表
 */
export default class TreeGrandchildListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    // console.log('zhuanghj', navigation.getParam('cid', ''))
    return {
      title: navigation.getParam('title', ''),
    }
  }

  constructor(props) {
    super(props)
    const { navigation } = props
    this.cid = navigation.getParam('cid', '')

    this.state = {
      pageNumber: 0,
      isLoading: false,
      treeArticles: [],
    }
  }

  componentDidMount() {
    this.loadTreeArticles()
  }

  /**
   * 文章列表项点击事件回调方法
   * @param {*} article 文章数据
   */
  onTreeArticleItemPress(article) {
    this.props.navigation.navigate('Web', {
      title: article.title,
      url: article.link,
    })
  }

  /**
   * 加载 “体系” 数据
   */
  loadTreeArticles() {
    this.setState({
      isLoading: true
    })
    return HttpManager.get(`/article/list/${this.state.pageNumber}/json?cid=${this.cid}`)
      .then(res => {
        console.log('loadTreeArticles success')
        let tempArticles = this.state.pageNumber == 0 ? [] : [...this.state.treeArticles]
        this.setState({
          isLoadingArticles: false,
          treeArticles: [...tempArticles, ...res.data.datas],
        })
      })
      .catch(err => { 
        console.log('loadTreeArticles error')
    })
  }

  /**
   * 刷新文章列表
   */
  refreshTreeArticles() {
    this.setState({
      pageNumber: 0,
    })
    this.loadTreeArticles()
  }

  /**
   * 加载更多首页文章列表
   */
  loadMoreTreeArticles() {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    })
    this.loadTreeArticles()
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
          data={this.state.treeArticles}
          keyExtractor={(article) => article.link}
          renderItem={({ item }) => (
            <TreeGrandchildItemView 
              articleItem={item} 
              onItemPress={(article) => this.onTreeArticleItemPress(article)}
            />
          )}
          ListFooterComponent={() => this.renderLoadingView()}
          onEndReached={() => this.loadMoreTreeArticles()}
          onEndReachedThreshold={1}
          refreshControl={
            <RefreshControl
              title={'正在加载..'}
              colors={['blue']}
              refreshing={this.state.isLoadingArticles}
              onRefresh={() => this.refreshTreeArticles()}
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