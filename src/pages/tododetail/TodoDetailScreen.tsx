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
  DatePickerView,
} from '@ant-design/react-native'

import {
  dimensions,
  sheets,
  colors,
  fontSizes,
  images,
} from '../../res'

import { 
  TodoItem, 
  UpdateTodoParams,
  updateTodo,
} from '../../apis';

import {
  alert,
  alertWithButton,
} from '../../m'

import {
  toDate, formatDate,
} from '../../utils'

type InputIdentify = '' | 'title' | 'content' | 'date'

interface Props {
}

interface State {
  editing: boolean,
  todoItem: TodoItem,
  currentIdentify: InputIdentify,

  title: string,
  content: string,
  dateValue: Date,
}

const PARAM_TODO_ITEM = 'todo_item'
const PARAM_ON_UPDATE_TODO_SUCCESS = 'on_update_todo_success'

export const TODO_DETAIL_SCREEN_NAME = 'TodoDetailScreen'

export function gotoTodoDetailScreen(navigation: NavigationScreenProp<any>, 
    todoItem: TodoItem, onUpdateTodoSuccess: () => void) {
  navigation.navigate(TODO_DETAIL_SCREEN_NAME, {
    [PARAM_TODO_ITEM]: todoItem,
    [PARAM_ON_UPDATE_TODO_SUCCESS]: onUpdateTodoSuccess,
  })
}

/**
 * 首页 - 待办页面
 */
export class TodoDetailScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '待办详情',
  }

  readonly state = {
    editing: false,
    todoItem: {} as TodoItem,
    currentIdentify: '' as InputIdentify,

    title: '',
    content: '',
    dateValue: new Date(),
  }

  componentDidMount() {
    const { navigation } = this.props
    const todoItem: TodoItem = navigation.getParam(PARAM_TODO_ITEM)
    this.setState({ 
      todoItem: {...todoItem},
      title: todoItem.title,
      content: todoItem.content,
      dateValue: toDate(todoItem.dateStr) as Date,
    })
  }

  onEditPress = () => {
    this.setState({  editing: true })
  }

  onCancelPress = () => {
    this.setState(prevState => {
      return {
        editing: false,
        title: prevState.todoItem.title,
        content: prevState.todoItem.content,
        dateValue: toDate(prevState.todoItem.dateStr) as Date,
      }
    })
  }

  onFinishPress = () => {
    this.setState({  editing: false })

    const { title, content, dateValue, todoItem } = this.state
    updateTodo(todoItem.id, {
      title,
      content,
      date: formatDate(dateValue),
      status: todoItem.status,
      type: todoItem.type,
      priority: todoItem.priority,
    }).then(() => {
      alertWithButton('温馨提示', '修改待办事项成功', '确定', () => {
        // 返回上一个页面
        const { navigation } = this.props
        navigation.goBack()
        // 回调以便刷新 TODO 列表
        const onUpdateTodoSuccess = navigation.getParam(PARAM_ON_UPDATE_TODO_SUCCESS, undefined)
        onUpdateTodoSuccess && onUpdateTodoSuccess()
      })
    }).catch(e => {
      alert(e.message)
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

  renderTextInput(value: string, editing: boolean, currentIdentify: InputIdentify, inputIdentify: InputIdentify, ) {
    let borderColor = colors.grey200
    if (editing) {
      borderColor = currentIdentify === inputIdentify ? colors.grey500 : colors.grey300
    } 
    return (
      <View style={[styles.textInpuContainer, { borderColor }]}>
        <TextInput
          value={value}
          editable={editing}
          onFocus={() => this.setState({ currentIdentify: inputIdentify })}
          onBlur={() => this.setState({ currentIdentify: '' })}
          onChangeText={text => {
            if (currentIdentify == 'title') {
              this.setState({ title: text })
            } else if (currentIdentify == 'content') {
              this.setState({ content: text })
            } else {
              console.log('date is can not edit form TextInput.')
            }
          }}
        />
      </View>
    )
  }

  render() {
    const { 
      editing, 
      todoItem, 
      currentIdentify,
      title,
      content,
      dateValue,
    } = this.state

    if (!todoItem) {
      return null
    }

    const item = todoItem as TodoItem
    const titleShow = editing ? title : item.title
    const contentShow = editing ? content : item.content
    return (
      <View style={sheets.screenContent}>
        <ScrollView style={styles.scrollView}>
          { this.renderSectionTitle(images.icDiscovery, '标题') }
          { this.renderTextInput(titleShow, editing, currentIdentify, 'title') }

          { this.renderSectionTitle(images.icDoc, '内容') }
          { this.renderTextInput(contentShow, editing, currentIdentify, 'content') }

          { this.renderSectionTitle(images.icCalendar, '日期') }
          { 
            editing ? (
              <DatePickerView 
                mode='date'
                value={dateValue}
                onChange={value => this.setState({ dateValue: value })}
              />
            ) : this.renderTextInput(item.dateStr, editing, currentIdentify, 'date') 
          }
          
          <View style={styles.buttonsContainer}>
            { editing ? null : <Text style={styles.button} onPress={this.onEditPress}>修改</Text>}
            { editing ? <Text style={styles.button} onPress={this.onCancelPress}>取消</Text> : null}
            { editing ? <Text style={styles.button} onPress={this.onFinishPress}>完成修改</Text> : null}
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