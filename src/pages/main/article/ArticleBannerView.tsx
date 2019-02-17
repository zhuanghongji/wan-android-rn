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
  BannerItem,
} from '../../../apis/banner'

interface Props {
  bannerItems?: BannerItem[],
  onItemPress?: (banner: BannerItem) => void,
}

interface State {
}

export default class ArticleItemView extends Component<Props, State> {

   /**
   * 绘制 Banner Item 视图
   */
  renderBannerItemViews() {
    const { bannerItems, onItemPress } = this.props
    if (!bannerItems) {
      return null
    }

    let itemViews = []
    for (const bannerItem of bannerItems) {
      itemViews.push(
        <TouchableOpacity 
          key={bannerItem.imagePath} 
          onPress={() => onItemPress && onItemPress(bannerItem)}
        >
          <View style={styles.swiperSlide}>
            <Image 
              style={styles.swipeImage} 
              source={{ uri: bannerItem.imagePath }} 
            />
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