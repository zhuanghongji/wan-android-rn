import * as React from 'react'
import { 
  TouchableOpacity, 
  Image,
} from 'react-native';

import { 
  createStackNavigator,
  createBottomTabNavigator,
  NavigationScreenProp,
  BottomTabNavigatorConfig,
  NavigationTabRouterConfigBase,
  NavigationInjectedProps,
  NavigationScreenOptions,
  NavigationTabScreenOptionsBase,
} from 'react-navigation';

import {
  colors,
  images,
} from '../res'

// 首页
import {
  ARTICLE_SCREEN_NAME,
  ArticleScreen,

  TODO_SCREEN_NAME,
  TodoScreen,

  EXPLORE_SCREEN_NAME,
  ExploreScreen,

  MINE_SCREEN_NAME,
  MineScreen,

  SEARCH_SCREEN_NAME,
  gotoSearchScreen,
  SearchScreen,

  WEB_SCREEN_NAME,
  WebScreen,

  NAVIGATION_SCREEN_NAME,
  NavigationScreen,

  TREE_CHILD_LIST_NAME,
  TreeChildListScreen,

  TREE_GRANDCHILD_SCREEN_NAME,
  TreeGrandchildListScreen,

  PROJECT_SCREEN_NAME,
  ProjectScreen,
  
  SITES_SCREEN_NAME,
  SitesScreen,
} from '../pages'

const MAIN_SCREEN_STACK_NAME = 'MainScreenStack'

type NavigationOptions2 = (navigation: NavigationInjectedProps ) => NavigationTabScreenOptionsBase

const aaa : NavigationOptions2 = ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    let icon;
    if (routeName === ARTICLE_SCREEN_NAME) {
      icon = focused ? images.articleFocused : images.articleNormal;
    } else if (routeName === TODO_SCREEN_NAME) {
      icon = focused ? images.todoFocused : images.todoNormal;
    } else if (routeName === EXPLORE_SCREEN_NAME) {
      icon = focused ? images.exploreFocused : images.exploreNormal;
    } else if (routeName === MINE_SCREEN_NAME) {
      icon = focused ? images.mineFocused : images.mineNormal; 
    }
    return <Image style={{ width: 24, height: 24 }} source={icon} />
  },
})

const ccc: BottomTabNavigatorConfig = {
  navigationOptions: aaa as NavigationTabRouterConfigBase,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#235C87',
    inactiveTintColor: '#8a8a8a',
  },
  animationEnabled: false,
  swipeEnabled: false,
}

/**
 * 首页 Tab 导航器
 */
const MainScreenStack = createBottomTabNavigator(
  {
    [ARTICLE_SCREEN_NAME]: ArticleScreen,
    [TODO_SCREEN_NAME]: TodoScreen,
    [EXPLORE_SCREEN_NAME]: ExploreScreen,
    [MINE_SCREEN_NAME]: MineScreen,
  }, ccc
)

const headerRight = (navigation: NavigationScreenProp<any>) => (
  <TouchableOpacity 
    style={{width: 24, height: 24, marginRight: 12, justifyContent: 'center',  }}
    onPress={() => gotoSearchScreen(navigation)} 
  >
    <Image 
      style={{ width: 16, height: 16 }} 
      source={images.icSearch} 
    />
  </TouchableOpacity>
)

type NavigationOptions = (navigation: NavigationInjectedProps ) => NavigationScreenOptions
const bbb: NavigationOptions = ({ navigation }) => {
  return {
    title: 'WAN',
    headerRight: headerRight(navigation)
  }
}

const MAIN_STACK_NAME = "MainStack"

const MainStack = createStackNavigator(
  {
    [MAIN_SCREEN_STACK_NAME]: {
      screen: MainScreenStack,
      navigationOptions: bbb,
    },
    [SEARCH_SCREEN_NAME]: SearchScreen,
    [WEB_SCREEN_NAME]: WebScreen,
    [NAVIGATION_SCREEN_NAME]: NavigationScreen,
    [TREE_CHILD_LIST_NAME]: TreeChildListScreen,
    [TREE_GRANDCHILD_SCREEN_NAME]: TreeGrandchildListScreen,
    [PROJECT_SCREEN_NAME]: ProjectScreen,
    [SITES_SCREEN_NAME]: SitesScreen,
  },
  {
    navigationOptions: {
      headerTintColor: colors.black,
    }
  }
)

export {
  MAIN_STACK_NAME,
  MainStack,
}