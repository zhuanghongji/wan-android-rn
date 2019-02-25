import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ViewStyle,
  TextStyle,
  ScrollView,
  ImageStyle,
} from 'react-native'

import {
  NavigationInjectedProps,
  NavigationScreenProp,
  NavigationScreenOptions,
} from 'react-navigation'

import {
  dimensions,
  sheets,
  colors,
  fontSizes,
  images,
} from '../../res'

import { 
  addTodo,
  AddTodoParam,
} from '../../apis';

import {
  alert, alertWithButton,
} from '../../m'

type InputIdentify = '' | 'title' | 'content' | 'date'

interface Props {
}

interface State {
  addTodoParam: AddTodoParam,
  currentIdentify: InputIdentify,
}

export const ADD_TODO_SCREEN_NAME = 'AddTodoScreen'

export function gotoAddTodoScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(ADD_TODO_SCREEN_NAME)
}

/**
 * 首页 - 添加待办
 */
export class AddTodoScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '添加待办',
  }

  readonly state = {
    addTodoParam: {
      title: '',
      content: '',
      date: new Date().getTime(),
      type: 0,
      priority: 1,
    },
    currentIdentify: '' as InputIdentify,
  }

  onChangeText(text: string, currentIdentify: InputIdentify) {
    const { addTodoParam } = this.state 
    if (currentIdentify === 'title') {
      this.setState({ addTodoParam: {...addTodoParam, title: text} })
    } else if (currentIdentify === 'content') {
      this.setState({ addTodoParam: {...addTodoParam, content: text} })
    } else if (currentIdentify === 'date') {
      this.setState({ addTodoParam: {...addTodoParam, date: parseInt(text)} })
    }
  }

  onSubmitPress = () => {
    const { addTodoParam } = this.state
    alertWithButton('点击提交', JSON.stringify(addTodoParam))
  }

  renderSectionTitle(icSource: number, text: string) {
    return (
      <View style={styles.sectionTitleContainer}>
        <Image style={styles.sectionTitleIcon} source={icSource}/>
        <Text style={styles.sectionTitleText}>{text}</Text>
      </View>
    )
  }

  renderTextInput(value: string, currentIdentify: InputIdentify, inputIdentify: InputIdentify, ) {
    const borderColor = currentIdentify === inputIdentify ? colors.grey500 : colors.grey300
    let placeholder = ''
    if (inputIdentify == 'title') {
      placeholder = '请输入待办标题..'
    } else if (inputIdentify == 'content') {
      placeholder = '请输入待办内容详情..'
    }
    return (
      <View style={[styles.textInpuContainer, { borderColor }]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onFocus={() => this.setState({ currentIdentify: inputIdentify })}
          onBlur={() => this.setState({ currentIdentify: '' })}
          onChangeText={text => this.onChangeText(text, currentIdentify)}
        />
      </View>
    )
  }

  render() {
    const { addTodoParam, currentIdentify } = this.state
    return (
      <View style={sheets.screenContent}>
        <ScrollView style={styles.scrollView}>
          { this.renderSectionTitle(images.icDiscovery, '标题') }
          { this.renderTextInput(addTodoParam.title, currentIdentify, 'title') }

          { this.renderSectionTitle(images.icDoc, '内容') }
          { this.renderTextInput(addTodoParam.content, currentIdentify, 'content') }

          { this.renderSectionTitle(images.icCalendar, '日期') }
          { this.renderTextInput(String(addTodoParam.date), currentIdentify, 'date') }
          
          <View style={styles.buttonsContainer}>
            <Text style={styles.button} onPress={this.onSubmitPress}>提交</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  scrollView: ViewStyle,
  sectionTitleContainer: ViewStyle,
  sectionTitleIcon: ImageStyle,
  sectionTitleText: TextStyle,
  textInpuContainer: ViewStyle,
  buttonsContainer: ViewStyle,
  button: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 1,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 32,
    marginBottom: 12,
  },
  sectionTitleIcon: {
    width: 16,
    height: 16,
  },
  sectionTitleText: {
    color: colors.grey500,
    fontSize: fontSizes.small,
    marginLeft: 8,
  },
  textInpuContainer: {
    width: dimensions.screenWidth - 32,
    borderWidth: dimensions.pixel,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 16,
  },
  buttonsContainer: {
    width: dimensions.screenWidth,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 32,
  },
  button: {
    color: colors.primary,
    fontSize: fontSizes.base,
    padding: 16,
  }
});