
import {
  StyleSheet,
  ViewStyle,
} from 'react-native'

interface Sheets {
  screenContainer: ViewStyle,
  screenContent: ViewStyle,
  absoluteFill: ViewStyle,
}

/**
 * 通用样式
 */
export const sheets = StyleSheet.create<Sheets>({
  screenContainer: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
  },
  absoluteFill: {
    position: "absolute", 
    left: 0, 
    right: 0, 
    top: 0, 
    bottom: 0
  },
})
