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
  TodoItem, 
  getTodoListOfDone,
  getTodoListOfTodo,
  updateTodoStatus,
  deleteTodo,
} from '../../apis';

import {
  alert,
} from '../../m'

type InputIdentify = '' | 'title' | 'content' | 'date'

interface Props {
}

interface State {
  editing: boolean,
  todoItem: TodoItem | undefined,
  currentIdentify: InputIdentify,
}

const PARAM_TODO_ITEM = 'todo_item'

export const TODO_DETAIL_SCREEN_NAME = 'TodoDetailScreen'

export function gotoTodoDetailScreen(navigation: NavigationScreenProp<any>, todoItem: TodoItem) {
  navigation.navigate(TODO_DETAIL_SCREEN_NAME, {
    [PARAM_TODO_ITEM]: todoItem,
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
    todoItem: undefined,
    currentIdentify: '' as InputIdentify,
  }

  componentDidMount() {
    const { navigation } = this.props
    const todoItem = navigation.getParam(PARAM_TODO_ITEM)
    this.setState({ todoItem: {...todoItem} })
  }

  onEditPress = () => {
    this.setState({  editing: true })
  }

  onCancelPress = () => {
    this.setState({  editing: false })
  }

  onFinishPress = () => {
    this.setState({  editing: false })
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
          onFocus={() => this.setState({ currentIdentify: inputIdentify })}
          onBlur={() => this.setState({ currentIdentify: '' })}
        />
      </View>
    )
  }

  render() {
    const { editing, todoItem, currentIdentify} = this.state
    if (!todoItem) {
      return null
    }
    const item = todoItem as TodoItem
    return (
      <View style={sheets.screenContent}>
        <ScrollView style={styles.scrollView}>
          { this.renderSectionTitle(images.icDiscovery, '标题') }
          { this.renderTextInput(item.title, editing, currentIdentify, 'title') }

          { this.renderSectionTitle(images.icDoc, '内容') }
          { this.renderTextInput(item.content, editing, currentIdentify, 'content') }

          { this.renderSectionTitle(images.icCalendar, '日期') }
          { this.renderTextInput(item.dateStr, editing, currentIdentify, 'date') }
          
          <View style={styles.buttonsContainer}>
            { editing ? null : <Text style={styles.button} onPress={this.onEditPress}>编辑</Text>}
            { editing ? <Text style={styles.button} onPress={this.onCancelPress}>取消</Text> : null}
            { editing ? <Text style={styles.button} onPress={this.onFinishPress}>完成</Text> : null}
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