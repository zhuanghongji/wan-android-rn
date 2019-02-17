import * as React from 'react'
import { Component } from 'react'

import {
  RefreshControl,
} from 'react-native'

import {
  sheets,
  dimensions,
} from '../res'

interface Props {
  refreshing: boolean,
  onRefresh: () => void,
}

interface State {
}

/**
 * 组件模板
 */
export class CustomRefreshControl extends Component<Props, State> {

  render() {
    const { refreshing, onRefresh } = this.props
    return (
      <RefreshControl
        title={ refreshing ? '加载中..' : '下载重新加载'}
        refreshing={refreshing}
        onRefresh={() => onRefresh()}
      />
    )
  }
}