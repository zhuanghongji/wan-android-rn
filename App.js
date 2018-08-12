/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
  StackNavigator, 
  TabNavigator, 
  TabBarBottom,
} from 'react-navigation';

// 首页
import ArticleScreen from './src/pages/main/article/ArticleScreen'
import TodoScreen from './src/pages/main/todo/TodoScreen'
import ExploreScreen from './src/pages/main/explore/ExploreScreen'
import MineScreen from './src/pages/main/mine/MineScreen'

// 搜索
import SearchScreen from './src/pages/search/SearchScreen'

const MainStack = TabNavigator(
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
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#235C87',
      inactiveTintColor: '#bdbdbd',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
)

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
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

