/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  TouchableOpacity, 
  Image,
} from 'react-native';

import { 
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// 首页
import ArticleScreen from './src/pages/main/article/ArticleScreen'
import TodoScreen from './src/pages/main/todo/TodoScreen'
import ExploreScreen from './src/pages/main/explore/ExploreScreen'
import MineScreen from './src/pages/main/mine/MineScreen'

import SearchScreen from './src/pages/search/SearchScreen'
import WebScreen from './src/pages/web/WebScreen'

import NavigationScreen from './src/pages/navigation/NavigationScreen'
import TreeChildListScreen from './src/pages/tree/child/TreeChildListScreen'
import TreeGrandchildListScreen from './src/pages/tree/grandchild/TreeGrandchildListScreen'
import ProjectScreen from './src/pages/project/ProjectScreen'
import SitesScreen from './src/pages/sites/SitesScreen'

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
          icon = focused ? require('./src/pages/main/article/res/article_focused.png') 
            : require('./src/pages/main/article/res/article_normal.png');
        } else if (routeName === 'Todo') {
          icon = focused ? require('./src/pages/main/todo/res/todo_focused.png') 
            : require('./src/pages/main/todo/res/todo_normal.png');
        } else if (routeName === 'Explore') {
          icon = focused ? require('./src/pages/main/explore/res/explore_focused.png') 
            : require('./src/pages/main/explore/res/explore_normal.png');
        } else if (routeName === 'Mine') {
          icon = focused ? require('./src/pages/main/mine/res/mine_focused.png') 
            : require('./src/pages/main/mine/res/mine_normal.png');
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

const RootStack = createStackNavigator(
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
                source={require('./src/assets/icon/ic_search.png')} 
              />
            </TouchableOpacity>
          )
        }
      }
    },
    Search: {
      screen: SearchScreen,
    },
    Web: {
      screen: WebScreen,
    },
    Navigation: {
      screen: NavigationScreen,
    },
    TreeChild: {
      screen: TreeChildListScreen,
    },
    TreeGrandchild: {
      screen: TreeGrandchildListScreen,
    },
    Project: {
      screen: ProjectScreen,
    },
    Sites: {
      screen: SitesScreen,
    }
  },
  {
    navigationOptions: {
      headerTintColor: 'black',
    }
  }
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}

