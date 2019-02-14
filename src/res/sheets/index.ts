
import {
  StyleSheet,
  ViewStyle,
} from 'react-native'

interface Sheets {
  absoluteFill: ViewStyle,
}

/**
 * 通用样式
 */
export const sheets = StyleSheet.create<Sheets>({
  absoluteFill: {
    position: "absolute", 
    left: 0, 
    right: 0, 
    top: 0, 
    bottom: 0
  },
})
