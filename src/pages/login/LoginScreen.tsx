import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
} from 'react-native'

import {
  NavigationInjectedProps,
  NavigationScreenProp,
} from 'react-navigation'

import {
  sheets,
  dimensions,
  colors,
  fontSizes,
  images,
} from '../../res'

import {
  userLogin,
} from '../../apis'

import {
  alert,
} from '../../m'

import {
  gotoMainStack,
} from '../../stacks'

interface Props {
}

interface State {
  username: string,
  password: string,
}

export const LOGIN_SCREEN_NAME = 'LoginScreen'

export function gotoLoginScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(LOGIN_SCREEN_NAME)
}

/**
 * 首页 - 待办页面
 */
export class LoginScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '请先登录',
  }

  readonly state = {
    username: "zhuanghongji",
    password: "zhuanghongji",
  }

  performLogin() {
    const { navigation } = this.props
    const { username, password } = this.state
    userLogin(username, password).then(loginInfo => {
      // alert(JSON.stringify(loginInfo))
      gotoMainStack(navigation)
    }).catch(e => {
      alert(e.message)
    })
  }

  render() {
    const { username, password } = this.state
    const loginItemBackgroundColor = (username && password) ? colors.primary : colors.primaryLight

    return (
      <View style={styles.content}>
        <Text style={styles.title}>WAN ANDROID</Text>

        <View style={styles.item}>
          <Image style={styles.itemIcon} source={images.icUser}/>
          <TextInput 
            style={styles.textInput} 
            placeholder="您的账号"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
        </View>

        <View style={styles.item}>
          <Image style={styles.itemIcon} source={images.icKey}/>
          <TextInput 
            style={styles.textInput} 
            placeholder="密码"
            value={password}
            onChangeText={text => this.setState({ password: text })}
          />
        </View>

        <TouchableOpacity 
          style={[styles.item, { backgroundColor: loginItemBackgroundColor }]}
          onPress={() => this.performLogin()}
        >
          <Image style={styles.itemIcon} source={images.icLoginWhite}/>
          <Text style={styles.loginText}>立即登录</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>注册</Text>
      </View>
    )
  }
}

interface Styles {
  content: ViewStyle,
  item: ViewStyle,
  title: TextStyle,
  itemIcon: ImageStyle,
  textInput: TextStyle,
  loginText: TextStyle,
  registerText: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fontSizes.super * 2,
    marginTop: 72,
    marginBottom: 36,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 24,
    backgroundColor: colors.grey200,
    marginTop: 24,
  },
  itemIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 16,
  },
  textInput: {
    fontSize: fontSizes.large,
    color: colors.black,
  },
  loginText: {
    fontSize: fontSizes.large,
    color: colors.white,
  },
  registerText: {
    marginTop: 48,
    fontSize: fontSizes.large,
    color: colors.primary,
  }
});