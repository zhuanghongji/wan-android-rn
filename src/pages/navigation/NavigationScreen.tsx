import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  ViewStyle,
  FlatList,
  TextStyle,
  Text,
} from 'react-native'

import {
  getNavi,
  NaviItem,
  NaviArticle,
} from '../../apis'

import {
  NavigationInjectedProps,
} from 'react-navigation'

import {
 dimensions, colors,
} from '../../res'

interface Props {
}

interface State {
  naviItems: NaviItem[],
}

/**
 * 首页 - 发现 - 导航
 */
export default class NavigationScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '导航',
  }

  readonly state = {
    naviItems: Array<NaviItem>(),
  }

  componentDidMount() {
    this.loadNavi()
  }

  /**
   * 加载导航数据
   */
  loadNavi() {
    getNavi().then(navi => {
      this.setState({
        naviItems: [...navi.data],
      })
    }).catch(e => {
      console.log(e)
    })
  }

  /**
   * NaviArticle 点击时回调
   */
  onNaviItemArticlePress(naviArticle: NaviArticle) {
    this.props.navigation.navigate('Web', {
      title: naviArticle.title,
      url: naviArticle.link,
    })
  }

  renderNaviItemArticle(article: NaviArticle) {
    return (
      <Text 
        style={styles.naviItemArticle}
        onPress={() => this.onNaviItemArticlePress(article)}
      >
        { article.title }
      </Text>
    )
  }

  renderNaviItem(naviItem: NaviItem) {
    return (
      <View style={styles.naviItem}>
        <View style={styles.divider} />
        <Text style={styles.naviItemName}>{naviItem.name}</Text>
        <FlatList 
          style={styles.naviItemList}
          data={naviItem.articles}
          numColumns={3}
          renderItem={({ item }) => (
            this.renderNaviItemArticle(item)
          )}
        />
      </View>
    )
  }

  render() {
    const { naviItems } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={naviItems}
          renderItem={({ item }) => (
            this.renderNaviItem(item)
          )}
        />
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  flatList: ViewStyle,
  divider: ViewStyle,
  naviItem: ViewStyle,
  naviItemName: TextStyle,
  naviItemList: ViewStyle,
  naviItemArticle: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    width: dimensions.screenWidth,
  },
  divider: {
    width: dimensions.screenWidth,
    height: 8,
    backgroundColor: colors.grey200,
  },
  naviItem: {
    flexDirection: 'column',
  },
  naviItemName: {
    color: 'red',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  naviItemList: {
    width: dimensions.screenWidth,
  },
  naviItemArticle: {
    color: 'blue',
    margin: 8,
  }, 
});