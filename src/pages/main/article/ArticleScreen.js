import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native'

import Swiper from 'react-native-swiper'
import HttpManager from '../../../http/HttpManager'

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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swiperWrapper}>
          <Swiper style={styles.swiper} autoplay={true}>
            <View style={styles.slide}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.text}>Hello World</Text>
            </View>
          </Swiper>
        </View>

        <Text style={styles.flatList}>{JSON.stringify(this.state.banner)}</Text>
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
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  flatList: {
    flex: 1
  }
});