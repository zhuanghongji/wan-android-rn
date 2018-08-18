import React, { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native'

let {width: screenWidth} = Dimensions.get('window')

/**
 * 首页 - 发现页面
 */
export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: '发现',
  }

  /**
   * 导航到参数对应的页面
   * @param {*} screen 页面参数
   */
  navigate(screen) {
    this.props.navigation.navigate(screen)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionWrapper}>
          <TouchableOpacity style={styles.itemWrapper} onPress={() => { this.navigate('Navigation') }}>
            <Image style={styles.itemIcon} source={require('./res/ic_navigation.png')}/>
            <Text style={styles.itemText}>导航</Text>
            <Image style={styles.itemArrow} source={require('./res/ic_arrow.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionWrapper}>
          <TouchableOpacity style={styles.itemWrapper} onPress={() => { this.navigate('TreeChild') }}>
            <Image style={styles.itemIcon} source={require('./res/ic_tree.png')}/>
            <Text style={styles.itemText}>体系</Text>
            <Image style={styles.itemArrow} source={require('./res/ic_arrow.png')}/>
          </TouchableOpacity>

          <View style={styles.sectionDivider}/>

          <TouchableOpacity style={styles.itemWrapper} onPress={() => { this.navigate('Project') }}>
            <Image style={styles.itemIcon} source={require('./res/ic_project.png')}/>
            <Text style={styles.itemText}>项目</Text>
            <Image style={styles.itemArrow} source={require('./res/ic_arrow.png')}/>
          </TouchableOpacity>

          <View style={styles.sectionDivider}/>

          <TouchableOpacity style={styles.itemWrapper} onPress={() => { this.navigate('Sites') }}>
            <Image style={styles.itemIcon} source={require('./res/ic_sites.png')}/>
            <Text style={styles.itemText}>常用网站</Text>
            <Image style={styles.itemArrow} source={require('./res/ic_arrow.png')}/>
          </TouchableOpacity>
        </View>
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
  sectionWrapper: {
    marginTop: 16,
    backgroundColor: 'white',
  }, 
  sectionDivider: {
    marginLeft: 16,
    width: screenWidth - 16,
    height: 1,
    backgroundColor: '#EFEFEF',
  }, 
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth,
    color: 'black',
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