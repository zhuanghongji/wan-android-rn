import * as React from 'react'
import { Component } from 'react'

import {
  StyleSheet,
  View,
} from 'react-native'

import {
  sheets,
  dimensions,
} from '../res'

interface Props {
}

interface State {
}

/**
 * 组件模板
 */
export class Template extends Component<Props, State> {

  readonly state = {

  }

  render() {
    return (
      <View style={sheets.screenContainer}>

      </View>
    )
  }
}

interface Styles {
}

const styles = StyleSheet.create<Styles>({

})