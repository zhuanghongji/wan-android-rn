/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, Button } from 'react-native';
import { 
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// 首页
import ArticleScreen from './src/pages/main/article/ArticleScreen'
import TodoScreen from './src/pages/main/todo/TodoScreen'
import ExploreScreen from './src/pages/main/explore/ExploreScreen'
import MineScreen from './src/pages/main/mine/MineScreen'

// 搜索
import SearchScreen from './src/pages/search/SearchScreen'

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
      navigationOptions: {
        title: 'WAN ANDROID',
      }
    },
    Search: {
      screen: SearchScreen,
    }
  }
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}

