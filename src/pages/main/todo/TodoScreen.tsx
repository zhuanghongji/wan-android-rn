import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TextStyle,
  ScrollView,
} from 'react-native'

import {
  NavigationInjectedProps,
  NavigationScreenProp,
} from 'react-navigation'

import {
  dimensions,
  sheets,
  colors,
  fontSizes,
} from '../../../res'

import { 
  TodoItem, 
  getTodoListOfDone,
  getTodoListOfTodo,
  updateTodoStatus,
  deleteTodo,
} from '../../../apis';

import {
  gotoTodoDetailScreen,
} from '../../index'

import {
  alert,
  alertWithButton,
} from '../../../m'

import { DoneItemView } from './DoneItemView'
import { HeaderView } from './HeaderView'
import { TodoItemView } from './TodoItemView'
import { CustomRefreshControl } from '../../../components';

interface Props {
}

interface State {
  type: number,
  loadingTodo: boolean,
  todoItems: TodoItem[],
  loadingDone: boolean,
  doneItems: TodoItem[],
}

export const TODO_SCREEN_NAME = 'TodoScreen'

export function gotoTodoScreen(navigation: NavigationScreenProp<any>) {
  navigation.navigate(TODO_SCREEN_NAME)
}

/**
 * 首页 - 待办页面
 */
export class TodoScreen extends Component<Props & NavigationInjectedProps, State> {

  static navigationOptions = {
    title: '待办',
  }

  readonly state = {
    type: -1,
    loadingTodo: false,
    todoItems: Array<TodoItem>(),
    loadingDone: false,
    doneItems: Array<TodoItem>(),
  }

  componentDidMount() {
    this.performOnRefresh()
  }

  performOnRefresh() {
    this.setState({
      loadingTodo: true,
      loadingDone: true,
    })

    // 加载未完成 Todo 清单
    getTodoListOfTodo(0).then(todoList => {
      this.setState({ todoItems: [...todoList.datas] })
    }).catch(e => {
      alert(e.message)
    }).finally(() => {
      this.setState({ loadingTodo: false })
    }) 

    // 加载已完成 Todo 清单
    getTodoListOfDone(0).then(todoList => {
      this.setState({ doneItems: [...todoList.datas] })
    }).catch(e => {
      alert(e.message)
    }).finally(() => {
      this.setState({ loadingDone: false })
    })
  }

  onAddTodoPress = () => {
    alert('添加 Todo')
  }

  onCompilePress = (doneItem: TodoItem) => {
    alertWithButton('要设置为未完成', JSON.stringify(doneItem))
  }

  onCompletePress = (todoItem: TodoItem) => {
    alertWithButton('要设置为完成', JSON.stringify(todoItem))
  }

  onDeletePress = (item: TodoItem) => {
    alertWithButton('要删除', JSON.stringify(item))
  }

  renderItemTitle(text: string, color: string) {
    return (
      <View style={[styles.itemTitleContainer, { backgroundColor: color}]}>
        <Text style={styles.itemTitleText}>{text}</Text>
      </View>
    )
  }

  renderTodoItems(todoItems: TodoItem[]) {
    const { navigation } = this.props
    return todoItems.map((value) => (
      <TodoItemView 
        key={value.id}
        todoItem={value}
        onItemPress={() => gotoTodoDetailScreen(navigation, value)}
        onCompletePress={this.onCompletePress}
        onDeletePress={this.onDeletePress}
      />
    ))
  }

  renderDoneItems(todoItems: TodoItem[]) {
    const { navigation } = this.props
    return todoItems.map((value) => (
      <DoneItemView 
        key={value.id}
        doneItem={value}
        onItemPress={() => gotoTodoDetailScreen(navigation, value)}
        onCompilePress={this.onCompilePress}
        onDeletePress={this.onDeletePress}
      />
    ))
  }

  render() {
    const { type, loadingTodo, todoItems, loadingDone, doneItems } = this.state
    const refreshing = loadingTodo && loadingDone
    return (
      <View style={sheets.screenContent}>
        <HeaderView 
          type={type} 
          onTypeSelected={type => this.setState({ type })}
          onAddTodoPress={this.onAddTodoPress}
        />
        <ScrollView
          refreshControl={(
            <CustomRefreshControl 
              refreshing={refreshing} 
              onRefresh={() => this.performOnRefresh()} 
            />
          )}
        >
          { this.renderItemTitle('待办清单', colors.green600) }
          { this.renderTodoItems(todoItems) }

          { this.renderItemTitle('已完成清单', colors.orange600) }
          { this.renderDoneItems(doneItems) }
        </ScrollView>
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  scrollView: ViewStyle,
  itemTitleContainer: ViewStyle,
  itemTitleText: TextStyle,
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
  itemTitleContainer: {
    width: dimensions.screenWidth - 32,
    height: 48,
    marginTop: 8,
    marginHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitleText: {
    color: colors.white,
    fontSize: fontSizes.huge,
  },
});