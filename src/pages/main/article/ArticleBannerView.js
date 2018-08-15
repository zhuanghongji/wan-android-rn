import React, { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
} from 'react-native'
import Swiper from 'react-native-swiper'
import HttpManager from '../../../http/HttpManager'

let screenWidth = Dimensions.get('window').width

export default class ArticleItemView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banner: [],
    }
  }

  componentDidMount() {
    this.loadBannerJson()
  }

  /**
   * 加载首页 Banner 数据
   */
  loadBannerJson() {
    return HttpManager.get('/banner/json')
      .then(res => {
        console.log('loadBannerJson success')
        this.setState({
          banner: res.data,
        })
      })
      .catch(err => { 
        console.log('loadBannerJson error')
    })
  }

   /**
   * 绘制 Banner Item 视图
   */
  renderBannerItemViews() {
    let items = this.state.banner
    let views = []
    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      views.push(
        <View style={styles.swiperSlide}>
          <Image style={styles.swipeImage} source={{ uri: item.imagePath }} />
        </View>
      )
    }
    return views
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.swiper} autoplay={true}>
          { this.renderBannerItemViews() }
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 180,
    borderRadius: 4,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
  swiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  swipeImage: {
    width: screenWidth,
    height: 180,
  },
})