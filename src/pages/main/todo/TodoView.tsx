import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
  Image,
  ImageStyle,
} from 'react-native'

import {
  dimensions,
  colors,
  fontSizes,
  images,
} from '../../../res'

import {
  TodoItem,
} from '../../../apis'

interface Props {
  todoItem: TodoItem,
  onCompletePress: () => void;
  onDeletePress: () => void;
}

function TodoView(props: Props) {
  const { todoItem, onCompletePress, onDeletePress } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icContainer}
        onPress={() => onCompletePress()}
      >
        <Image style={styles.icDispose} source={images.icDispose} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.todoTitle} numberOfLines={1}>{todoItem.title}</Text>
        <Text style={styles.todoContent} numberOfLines={1}>{todoItem.content}</Text>
        <Text style={styles.todoDateStr}>{`日期：${todoItem.dateStr}`}</Text>
      </View>

      <TouchableOpacity
        style={styles.icContainer}
        onPress={() => onDeletePress()}
      >
        <Image style={styles.icDelete}source={images.icDelete} />
      </TouchableOpacity>
    </View>
  )
}

interface Styles {
  container: ViewStyle,
  icContainer: ViewStyle,
  icDispose: ImageStyle,
  content: ViewStyle,
  todoTitle: TextStyle,
  todoContent: TextStyle,
  todoDateStr: TextStyle,
  icDelete: ImageStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: dimensions.screenWidth,
    paddingHorizontal: 16,
    backgroundColor: colors.green50,
  },
  icContainer: {
    padding: 8,
  },
  icDispose: {
    width: 16,
    height: 16,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
  },
  todoTitle: {
    color: colors.black,
    fontSize: fontSizes.base,
  },
  todoContent: {
    marginTop: 4,
    color: colors.grey500,
    fontSize: fontSizes.small,
  },
  todoDateStr: {
    marginTop: 4,
    color: colors.grey500,
    fontSize: fontSizes.small,
  },
  icDelete: {
    width: 16,
    height: 16,
  },
})

export {
  TodoView,
}