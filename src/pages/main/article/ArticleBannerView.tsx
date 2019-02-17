import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native'

import {
  dimensions,
} from '../../../res'

import Swiper from 'react-native-swiper'

import {
  getBanner,
  BannerItem,
} from '../../../apis/banner'

interface Props {
  onItemPress: (banner: BannerItem) => void,
}

interface State {
  bannerItems: BannerItem[],
}

export default class ArticleItemView extends Component<Props, State> {

  readonly state = {
    bannerItems: Array<BannerItem>(),
  }

  componentDidMount() {
    // 加载首页 Banner 数据
    getBanner().then(banner => {
      this.setState({
        bannerItems: [...banner.data]
      })
    })
  }

  onItemPress(item: BannerItem) {
    this.props.onItemPress(item)
  }

   /**
   * 绘制 Banner Item 视图
   */
  renderBannerItemViews() {
    const { bannerItems } = this.state
    let itemViews = []
    for (const bannerItem of bannerItems) {
      itemViews.push(
        <TouchableOpacity 
          key={bannerItem.imagePath} 
          onPress={() => this.onItemPress(bannerItem)}
        >
          <View style={styles.swiperSlide}>
            <Image style={styles.swipeImage} source={{ uri: bannerItem.imagePath }} />
          </View>
        </TouchableOpacity>
      )
    }
    return itemViews
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

interface Styles {
  container: ViewStyle,
  swiperSlide: ViewStyle,
  swipeImage: ImageStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: dimensions.screenWidth,
    height: 180,
    borderRadius: dimensions.radiusLittle,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
  swiperSlide: {
    width: dimensions.screenWidth - 24,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  swipeImage: {
    width: dimensions.screenWidth - 24,
    height: 180,
  },
})