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
  NavigationInjectedProps,
  NavigationScreenProp,
} from 'react-navigation'

import {
  getNavi,
  NaviItem,
  NaviArticle,
} from '../../apis'

import {
  gotoWebScreen,
} from '../../pages'

import {
 dimensions, 
 colors,
} from '../../res'

interface Props {
}

interface State {
  naviItems: NaviItem[],
}

export const NAVIGATION_SCREEN_NAME = 'NavigationScreen'

export function gotoNavigationScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(NAVIGATION_SCREEN_NAME)
}

/**
 * 首页 - 发现 - 导航
 */
export class NavigationScreen extends Component<Props & NavigationInjectedProps, State> {

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
    getNavi().then(naviItems => {
      this.setState({
        naviItems: [...naviItems],
      })
    }).catch(e => {
      console.log(e)
    })
  }

  /**
   * NaviArticle 点击时回调
   */
  onNaviItemArticlePress(naviArticle: NaviArticle) {
    gotoWebScreen(this.props.navigation, naviArticle.title, naviArticle.link)
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
          numColumns={2}
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
    backgroundColor: 'white',
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
    flex: 1,
    color: 'blue',
    margin: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
  }, 
});