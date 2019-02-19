import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  ViewStyle,
  TextStyle,
} from 'react-native'

import {
  dimensions,
} from '../../res'

import { Hotkey } from 'src/apis';

interface Props {
  hotkeys: Hotkey[];
  onHotkeyPress: (hotkey: Hotkey) => void;
}

interface State {
}

/**
 * 组件：搜索热词
 */
export default class HotKeyView extends Component<Props, State> {

  renderHotKeyItem(hotkey: Hotkey) {
    const { onHotkeyPress } = this.props
    return (
      <TouchableOpacity 
        style={styles.hotKeyItem}
        onPress={() => onHotkeyPress(hotkey)}
      >
        <Text style={styles.text} >{hotkey.name}</Text>
      </TouchableOpacity>
    )
  }
  
  render() {
    const { hotkeys } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={hotkeys}
          keyExtractor={(item) => item.name}
          numColumns={3}
          renderItem={({ item }) => (
            this.renderHotKeyItem(item)
          )}
        />
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  flatList: ViewStyle,
  hotKeyItem: ViewStyle,
  text: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: dimensions.screenWidth,
    marginVertical: 12,
  },
  flatList: {
    width: dimensions.screenWidth,
  },
  hotKeyItem: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    color: '#235C87'
  }
})