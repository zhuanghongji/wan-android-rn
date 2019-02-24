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

interface Props {
  type: number;
  onTypeSelected: (type: number) => void;
  onAddTodoPress: () => void;
}

function HeaderView(props: Props) {
  const { type, onTypeSelected, onAddTodoPress } = props
  return (
    <View style={styles.container}>
      { getTypeButton(type, -1, '全部', onTypeSelected) }
      { getTypeButton(type, 0, '只用这一个', onTypeSelected) }
      { getTypeButton(type, 1, '工作', onTypeSelected) }
      { getTypeButton(type, 2, '学习', onTypeSelected) }
      { getTypeButton(type, 3, '生活', onTypeSelected) }

      <View style={{ flex: 1 }} />
      <TouchableOpacity 
        style={styles.addTodoContainer} 
        onPress={() => onAddTodoPress()}
      >
        <Image 
          style={styles.addTodo} 
          source={images.icAddPrimary}
        />
      </TouchableOpacity>
      
    </View>
  )
}

function getTypeButton(type: number, buttonType: number, buttonText: string, onTypeSelected: (type: number) => void)
    : React.ReactElement {
  return (
    <TouchableOpacity 
        style={getTypeButtonStyles(type, buttonType)}
        onPress={() => onTypeSelected(buttonType)}
      >
        <Text style={getTypeTextStyles(type, buttonType)}>{buttonText}</Text>
      </TouchableOpacity>
  )
}

function getTypeButtonStyles(type: number, buttonType: number): ViewStyle[] {
  return [ 
    styles.typeButton, 
    { backgroundColor: type == buttonType ? colors.primary : colors.white }
  ]
}

function getTypeTextStyles(type: number, buttonType: number): TextStyle[] {
  return [ 
    styles.typeText, 
    { color: type == buttonType ? colors.white : colors.primary }
  ]
}

interface Styles {
  container: ViewStyle,
  typeButton: ViewStyle,
  typeText: TextStyle,
  addTodoContainer: ViewStyle,
  addTodo: ImageStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: dimensions.screenWidth,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  typeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    padding: 4,
    borderColor: colors.primary,
    borderWidth: dimensions.pixel * 2,
    borderRadius: 8,
  },
  typeText: {
    color: colors.primary,
    fontSize: fontSizes.small,
  },
  addTodoContainer: {
    paddingLeft: 16,
    paddingVertical: 8,
  },
  addTodo: {
    width: 24,
    height: 24,
  },
})

export {
  HeaderView,
}