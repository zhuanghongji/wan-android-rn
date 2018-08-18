import React from 'react';
import { 
  TouchableOpacity, 
  Image,
} from 'react-native';

import { 
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

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
          icon = focused ? require('../pages/main/article/res/article_focused.png') 
            : require('../pages/main/article/res/article_normal.png');
        } else if (routeName === 'Todo') {
          icon = focused ? require('../pages/main/todo/res/todo_focused.png') 
            : require('../pages/main/todo/res/todo_normal.png');
        } else if (routeName === 'Explore') {
          icon = focused ? require('../pages/main/explore/res/explore_focused.png') 
            : require('../pages/main/explore/res/explore_normal.png');
        } else if (routeName === 'Mine') {
          icon = focused ? require('../pages/main/mine/res/mine_focused.png') 
            : require('../pages/main/mine/res/mine_normal.png');
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
                source={require('../assets/icon/ic_search.png')} 
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