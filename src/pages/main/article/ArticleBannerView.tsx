import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native'

import Swiper from 'react-native-swiper'
import HttpManager from '../../../http/HttpManager'

let screenWidth = Dimensions.get('window').width

interface Props {
  onItemPress: (item: Item) => void,
}

interface State {
  banner: Item[],
}

interface Styles {
  container: ViewStyle,
  swiperSlide: ViewStyle,
  swipeImage: ImageStyle,
}

interface Item {
  imagePath: string,
}

export default class ArticleItemView extends Component<Props, State> {

  readonly state = {
    banner: Array<Item>(),
  }

  componentDidMount() {
    this.loadBannerJson()
  }

  /**
   * 加载首页 Banner 数据
   */
  loadBannerJson() {
    return HttpManager.get('/banner/json').then(res => {
        console.log('loadBannerJson success')
        this.setState({
          banner: res.data,
        })
      }).catch(err => { 
        console.log('loadBannerJson error')
    })
  }

  onItemPress(item: Item) {
    this.props.onItemPress(item)
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
        <TouchableOpacity key={item.imagePath} onPress={() => this.onItemPress(item)}>
          <View style={styles.swiperSlide}>
            <Image style={styles.swipeImage} source={{ uri: item.imagePath }} />
          </View>
        </TouchableOpacity>
      )
    }
    return views
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Swiper 
          autoplay={true}
          dotStyle={{ marginBottom: -24 }}
          activeDotStyle={{ marginBottom: -24 }}
        >
          { this.renderBannerItemViews() }
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: screenWidth,
    height: 180,
    borderRadius: 4,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
  swiperSlide: {
    width: screenWidth - 24,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  swipeImage: {
    width: screenWidth - 24,
    height: 180,
  },
})