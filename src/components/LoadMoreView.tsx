import * as React from 'react'
import { Component } from 'react'

import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native'

import {
  sheets,
  dimensions,
  fontSizes,
} from '../res'

export type LoadMoreViewType = 'normal' | 'loading' | 'completed' | 'error'

interface Props {
  type: LoadMoreViewType,
  onRetry?: () => void,
}

interface State {
}

/**
 * 列表底部 “加载更多” 组件
 */
export class LoadMoreView extends Component<Props, State> {

  // static Type = {
  //   NORMAL: 'normal',
  //   LOADING: 'loading',
  //   COMPLETED: 'completed',
  //   ERROR: 'error',
  // }

  static defaultProps = {
    // type: LoadMoreView.Type.NORMAL,
    type: 'normal',
  }

  getTypeDesc(type: LoadMoreViewType) {
    switch(type) {
      case 'normal': 
        return "上拉加载更多"
      case 'loading': 
        return "加载中.."
      case 'completed': 
        return "已全部加载"
      case 'error': 
        return "加载异常，点击继续加载"
      default: 
        return ""
    }
  }

  render() {
    const { type } = this.props
    return (
      <TouchableOpacity 
        style={styles.container}
        disabled={type !== 'error'}
      >
        {
          type === 'loading' ? (
            <ActivityIndicator 
              size="small" 
              animating={true} 
            />
          ) : null
        }
        <Text style={styles.text}>
          { this.getTypeDesc(type) }
        </Text>
      </TouchableOpacity>
    )
  }
}

interface Styles {
  container: ViewStyle,
  text: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginRight: 16,
  },
  text: {
    color: 'black',
    fontSize: fontSizes.small,
  }
})