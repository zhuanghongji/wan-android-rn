import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native'

import Swiper from 'react-native-swiper'
import HttpManager from '../../../http/HttpManager'

let Dimensions = require('Dimensions')
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height

export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: '文章',
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      banner: [],
    }
  }

  componentDidMount() {
    this.getHomeBanner()
  }

  getHomeBanner() {
    return HttpManager.get('/banner/json')
      .then(res => {
        console.log('getHomeBanner success')
        this.setState({
          banner: res.data,
        })
      })
      .catch(err => { 
        console.log('getHomeBanner error')
    })
  }

  renderAllBannerItem() {
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
        <View style={styles.swiperWrapper}>
          <Swiper style={styles.swiper} autoplay={true}>
            { this.renderAllBannerItem() }
          </Swiper>
        </View>

        {/* <Text style={styles.flatList}>{JSON.stringify(this.state.banner)}</Text> */}
        {/* <FlatList style={styles.flatList}/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  swiperWrapper: { 
    height: 180,
  },
  swiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  swipeImage: {
    width: ScreenWidth,
    height: 180,
  },
  flatList: {
    flex: 1
  }
});