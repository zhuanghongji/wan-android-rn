import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

// import { Hello } from '../../../components/Hello'

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 首页 - 待办页面
 */
export default class ArticleScreen extends Component<Props, State> {
  static navigationOptions = {
    title: '待办',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>待办</Text>
        {/* <Hello name="zhuang" enthusiasmLevel={1} /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});