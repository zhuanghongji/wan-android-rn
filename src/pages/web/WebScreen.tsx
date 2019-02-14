import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  WebView,
} from 'react-native'


let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 网页页面
 */
export default class WebScreen extends Component<Props, State> {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
      headerBackTitle: '',
    }
  }

  render() {
    const { navigation } = this.props
    const url = navigation.getParam('url', '')

    return (
      <View style={styles.container}>
        <WebView
          style={styles.web}
          source={{ uri: url }}
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
  web: {
    width: screenWidth,
    height: screenHeight,
  }
});