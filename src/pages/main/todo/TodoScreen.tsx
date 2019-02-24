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

import { TodoItem } from 'src/apis';

import { DoneView } from './DoneView'
import { HeaderView } from './HeaderView'
import { TodoView } from './TodoView'

interface Props {
}

interface State {
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

  renderItemTitle(text: string, color: string) {
    return (
      <View style={[styles.itemTitleContainer, { backgroundColor: color}]}>
        <Text style={styles.itemTitleText}>{text}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={sheets.screenContent}>
        <HeaderView 
          type={3} 
          onTypeSelected={type => {}}
          onAddTodoPress={() => {}}
        />

        { this.renderItemTitle('待办清单', colors.green600) }
        <TodoView 
          todoItem={{title: '123', content: 'ABCDEFG', dateStr: '2018-01-01'} as TodoItem}
          onCompletePress={() => {}}
          onDeletePress={() => {}}
        />

        { this.renderItemTitle('已完成清单', colors.orange600) }
        <DoneView 
          doneItem={{title: '123', content: 'ABCDEFG', dateStr: '2018-01-01'} as TodoItem}
          onCompilePress={() => {}}
          onDeletePress={() => {}}
        />
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