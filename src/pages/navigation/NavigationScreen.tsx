import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'

import HttpManager from '../../http/HttpManager'

let screenWidth = Dimensions.get('window').width

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 首页：导航
 */
export default class NavigationScreen extends Component<Props, State> {
  static navigationOptions = {
    title: '导航',
  }

  constructor(props) {
    super(props)
    this.state = {
      navigationItems: [],
    }
  }

  componentDidMount() {
    this.loadHotKey()
  }

  /**
   * 加载 “搜索热词”
   */
  loadNavigationJson() {
    return HttpManager.get('/navi/json')
      .then(res => {
        this.setState({
          navigationItems: res.data,
        })
      })
      .catch(err => { 
        console.log('loadNavigationJson error')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={this.state.hotKey}
          keyExtractor={(key) => key.name}
          numColumns={3}
          renderItem={({ item }) => (
            this.renderHotKeyItem(item)
          )}
        />
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
  flatList: {
    width: screenWidth,
  },
});