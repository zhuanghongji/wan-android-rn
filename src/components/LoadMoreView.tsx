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

interface Props {
  type: string,
  onRetry?: () => void,
}

interface State {
}

/**
 * 列表底部 “加载更多” 组件
 */
export class LoadMoreView extends Component<Props, State> {

  static Type = {
    NORMAL: 'normal',
    LOADING: 'loading',
    COMPLETED: 'completed',
    ERROR: 'error',
  }

  static defaultProps = {
    type: LoadMoreView.Type.NORMAL,
  }

  getTypeDesc(type: string) {
    switch(type) {
      case LoadMoreView.Type.NORMAL: 
        return "上拉加载更多"
      case LoadMoreView.Type.LOADING: 
        return "加载中.."
      case LoadMoreView.Type.COMPLETED: 
        return "已全部加载"
      case LoadMoreView.Type.LOADING: 
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
        disabled={type !== LoadMoreView.Type.ERROR}
      >
        {
          type === LoadMoreView.Type.LOADING ? (
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