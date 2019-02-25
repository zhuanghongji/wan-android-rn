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
  Toast,
  DatePickerView,
  Portal,
  WhiteSpace,
} from '@ant-design/react-native'

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

import {
  formatDate,
} from '../../utils'

type InputIdentify = '' | 'title' | 'content' | 'date'

interface Props {
}

interface State {
  title: string,
  content: string,
  dateValue: Date,
  currentIdentify: InputIdentify,
}

const PARAM_ON_ADD_TODO_SUCCESS = 'on_add_todo_success'

export const ADD_TODO_SCREEN_NAME = 'AddTodoScreen'

export function gotoAddTodoScreen(navigation: NavigationScreenProp<any>, onAddTodoSuccess: () => void) {
  navigation.navigate(ADD_TODO_SCREEN_NAME, {
    [PARAM_ON_ADD_TODO_SUCCESS]: onAddTodoSuccess,
  })
}

/**
 * 首页 - 添加待办
 */
export class AddTodoScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '添加待办',
  }

  readonly state = {
    title: '',
    content: '',
    dateValue: new Date(),
    currentIdentify: '' as InputIdentify,
  }

  onChangeText(text: string, currentIdentify: InputIdentify) {
    if (currentIdentify === 'title') {
      this.setState({ title: text })
    } else if (currentIdentify === 'content') {
      this.setState({ content: text })
    }
  }

  onDateChange(value: Date) { 
    this.setState({ dateValue: value })
  }

  /**
   * 提交待办事项
   */
  onSubmitPress = () => {
    const { title, content, dateValue } = this.state
    if (!title) {
      alert('请输入待办事项标题')
      return
    }
    if (!content) {
      alert('请输入待办事项详细内容')
      return
    }

    addTodo(title, content, formatDate(dateValue)).then(() => {
      alertWithButton('温馨提示', '添加待办事项成功', '确定', () => {
        // 返回上一个页面
        const { navigation } = this.props
        navigation.goBack()
        // 回调以便刷新 TODO 列表
        const onAddTodoSuccess = navigation.getParam(PARAM_ON_ADD_TODO_SUCCESS, undefined)
        onAddTodoSuccess && onAddTodoSuccess()
      })
    })
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
    const { title, content, dateValue, currentIdentify } = this.state
    return (
      <View style={sheets.screenContent}>
        <ScrollView style={styles.scrollView}>
          { this.renderSectionTitle(images.icDiscovery, '标题') }
          { this.renderTextInput(title, currentIdentify, 'title') }

          { this.renderSectionTitle(images.icDoc, '内容') }
          { this.renderTextInput(content, currentIdentify, 'content') }

          { this.renderSectionTitle(images.icCalendar, '日期') }
          <DatePickerView 
            mode='date'
            value={dateValue}
            onChange={value => this.onDateChange(value)}
          />
          
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