import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TextStyle,
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
  getTodoList,
  getTodoListOfDone,
  getTodoListOfTodo,
} from '../../../apis';

import {
  alert,
} from '../../../m'

import { DoneView } from './DoneView'
import { HeaderView } from './HeaderView'
import { TodoView } from './TodoView'

interface Props {
}

interface State {
  type: number,
  todoItems: TodoItem[],
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
    type: 0,
    todoItems: Array<TodoItem>(),
    doneItems: Array<TodoItem>(),
  }

  componentDidMount() {
    getTodoListOfTodo(0).then(todoList => {
      alert(JSON.stringify(todoList))
      this.setState({ todoItems: [...todoList.datas] })
    }).catch(e => {
      alert(e.message)
    })

    getTodoListOfDone(0).then(todoList => {
      alert(JSON.stringify(todoList))
      this.setState({ doneItems: [...todoList.datas] })
    }).catch(e => {
      alert(e.message)
    })
  }

  renderItemTitle(text: string, color: string) {
    return (
      <View style={[styles.itemTitleContainer, { backgroundColor: color}]}>
        <Text style={styles.itemTitleText}>{text}</Text>
      </View>
    )
  }

  renderTodoItems(todoItems: TodoItem[]) {
    return todoItems.map((value) => (
      <TodoView 
        key={value.id}
        todoItem={value}
        onCompletePress={() => {}}
        onDeletePress={() => {}}
      />
    ))
  }

  renderDoneItems(todoItems: TodoItem[]) {
    return todoItems.map((value) => (
      <DoneView 
        key={value.id}
        doneItem={value}
        onCompilePress={() => {}}
        onDeletePress={() => {}}
      />
    ))
  }

  render() {
    const { type, todoItems, doneItems } = this.state
    return (
      <View style={sheets.screenContent}>
        <HeaderView 
          type={3} 
          onTypeSelected={(type) => {}}
          onAddTodoPress={() => {}}
        />

        { this.renderItemTitle('待办清单', colors.green600) }
        { this.renderTodoItems(todoItems) }
        {/* <TodoView 
          todoItem={{title: '123', content: 'ABCDEFG', dateStr: '2018-01-01'} as TodoItem}
          onCompletePress={() => {}}
          onDeletePress={() => {}}
        /> */}

        { this.renderItemTitle('已完成清单', colors.orange600) }
        { this.renderDoneItems(doneItems) }
        {/* <DoneView 
          doneItem={{title: '123', content: 'ABCDEFG', dateStr: '2018-01-01'} as TodoItem}
          onCompilePress={() => {}}
          onDeletePress={() => {}}
        /> */}
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
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
  itemTitleContainer: {
    width: dimensions.screenWidth,
    height: 48,
    marginTop: 8,
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