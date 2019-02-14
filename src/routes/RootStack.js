import * as React from 'react'
import { 
  TouchableOpacity, 
  Image,
} from 'react-native';

import { 
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import {
  colors,
  images,
} from '../res'

// 首页
import ArticleScreen from '../pages/main/article/ArticleScreen'
import TodoScreen from '../pages/main/todo/TodoScreen'
import ExploreScreen from '../pages/main/explore/ExploreScreen'
import MineScreen from '../pages/main/mine/MineScreen'

import SearchScreen from '../pages/search/SearchScreen'
import WebScreen from '../pages/web/WebScreen'

import NavigationScreen from '../pages/navigation/NavigationScreen'
import TreeChildListScreen from '../pages/tree/child/TreeChildListScreen'
import TreeGrandchildListScreen from '../pages/tree/grandchild/TreeGrandchildListScreen'
import ProjectScreen from '../pages/project/ProjectScreen'
import SitesScreen from '../pages/sites/SitesScreen'

/**
 * 首页 Tab 导航器
 */
const MainStack = createBottomTabNavigator(
  {
    Article: {
      screen: ArticleScreen,
    },
    Todo: {
      screen: TodoScreen,
    },
    Explore: {
      screen: ExploreScreen,
    },
    Mine: {
      screen: MineScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Article') {
          icon = focused ? images.articleFocused : images.articleNormal;
        } else if (routeName === 'Todo') {
          icon = focused ? images.todoFocused : images.todoNormal;
        } else if (routeName === 'Explore') {
          icon = focused ? images.exploreFocused : images.exploreNormal;
        } else if (routeName === 'Mine') {
          icon = focused ? images.mineFocused : images.mineNormal; 
        }
        return <Image style={{ width: 24, height: 24 }} source={icon} />
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#235C87',
      inactiveTintColor: '#8a8a8a',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
)

export default RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'WAN',
          headerRight: (
            <TouchableOpacity 
              style={{width: 24, height: 24, marginRight: 12, justifyContent: 'center',  }}
              onPress={() => {navigation.navigate('Search')}} 
            >
              <Image 
                style={{ width: 16, height: 16 }} 
                source={images.icSearch} 
              />
            </TouchableOpacity>
          )
        }
      }
    },
    Search: SearchScreen,
    Web: WebScreen,
    Navigation: NavigationScreen,
    TreeChild: TreeChildListScreen,
    TreeGrandchild: TreeGrandchildListScreen,
    Project: ProjectScreen,
    Sites: SitesScreen,
  },
  {
    navigationOptions: {
      headerTintColor: colors.black,
    }
  }
)