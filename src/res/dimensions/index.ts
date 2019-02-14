
import {
  Dimensions,
  PixelRatio,
} from 'react-native'

const { 
  width: screenWidth, 
  height: screenHeight, 
} = Dimensions.get('window')

/**
 * 尺寸大小
 */
export const dimensions = {
  /** 屏幕宽度 */
  screenWidth: screenWidth,
  /** 屏幕高度 */
  screenHeight: screenHeight,
  /** 最小尺寸(1个像素) */
  pixel: 1 / PixelRatio.get(),

  marginZero: 0,
  marginTiny: 2,
  marginLittle: 4,
  marginSmall: 6,
  marginMiddle: 8,
  marginLarge: 10,
  marginGreat: 12,
  marginHuge: 14,
  marginSuper: 16,

  paddingZero: 0,
  paddingTiny: 2,
  paddingLittle: 4,
  paddingSmall: 6,
  paddingMiddle: 8,
  paddingLarge: 10,
  paddingGreat: 12,
  paddingHuge: 14,
  paddingSuper: 16,

  radiusZero: 0,
  radiusTiny: 2,
  radiusLittle: 4,
  radiusSmall: 6,
  radiusMiddle: 8,
  radiusLarge: 10,
  radiusGreat: 12,
  radiusHuge: 14,
  radiusSuper: 16,

  lineZero: 0,
  lineTiny: 1,
  lineLittle: 2,
  lineSmall: 3,
  lineMiddle: 4,
  lineLarge: 5,
  lineGreat: 6,
  lineHuge: 7,
  lineSuper: 8,
}