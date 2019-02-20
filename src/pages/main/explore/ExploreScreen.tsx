import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  Text,
  TextStyle,
} from 'react-native'

import {
  NavigationInjectedProps,
  NavigationScreenProp,
} from 'react-navigation'

import {
  images,
  dimensions,
} from '../../../res'

import {
  gotoNavigationScreen,
  gotoTreeChildListScreen,
  gotoProjectScreen,
  gotoSitesScreen,
} from '../../index'

interface Props {
}

interface State {
}

export const EXPLORE_SCREEN_NAME = 'ExploreScreen'

export function gotoExploreScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(EXPLORE_SCREEN_NAME)
}

/**
 * 首页 - 发现页面
 */
export class ExploreScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '发现',
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.sectionWrapper}>
          <TouchableOpacity 
            style={styles.itemWrapper} 
            onPress={() => { gotoNavigationScreen(navigation) }}
          >
            <Image style={styles.itemIcon} source={images.icNavigation}/>
            <Text style={styles.itemText}>导航</Text>
            <Image style={styles.itemArrow} source={images.icArrow}/>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionWrapper}>
          <TouchableOpacity 
            style={styles.itemWrapper} 
            onPress={() => { gotoTreeChildListScreen(navigation) }}
          >
            <Image style={styles.itemIcon} source={images.icTree}/>
            <Text style={styles.itemText}>体系</Text>
            <Image style={styles.itemArrow} source={images.icArrow}/>
          </TouchableOpacity>

          <View style={styles.sectionDivider}/>

          <TouchableOpacity 
            style={styles.itemWrapper} 
            onPress={() => { gotoProjectScreen(navigation) }}
          >
            <Image style={styles.itemIcon} source={images.icProject}/>
            <Text style={styles.itemText}>项目</Text>
            <Image style={styles.itemArrow} source={images.icArrow}/>
          </TouchableOpacity>

          <View style={styles.sectionDivider}/>

          <TouchableOpacity 
            style={styles.itemWrapper} 
            onPress={() => { gotoSitesScreen(navigation) }}
          >
            <Image style={styles.itemIcon} source={images.icSites}/>
            <Text style={styles.itemText}>常用网站</Text>
            <Image style={styles.itemArrow} source={images.icArrow}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  sectionWrapper: ViewStyle,
  sectionDivider: ViewStyle,
  itemWrapper: ViewStyle,
  itemIcon: ImageStyle,
  itemText: TextStyle,
  itemArrow: ImageStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#EFEFEF',
  },
  sectionWrapper: {
    marginTop: 16,
    backgroundColor: 'white',
  }, 
  sectionDivider: {
    marginLeft: 16,
    width: dimensions.screenWidth - 16,
    height: 1,
    backgroundColor: '#EFEFEF',
  }, 
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: dimensions.screenWidth,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemIcon: {
    width: 24,
    height: 24,
  },
  itemText: {
    flex: 1,
    marginLeft: 12,
    color: 'black',
  },
  itemArrow: {
    width: 24,
    height: 24,
  },
});