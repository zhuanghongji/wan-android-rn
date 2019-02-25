import React from 'react';
import {
  StyleSheet, 
  TouchableOpacity,
  View, 
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { Tag } from '../apis'

import { fontSizes, colors, dimensions } from '../res';

export interface Props {
  tags: Tag[];
  onTagPress: (tag: Tag) => void;
}

interface State {
}

export class TagGroup extends React.Component<Props, State> {
  
  renderTags(tags: Tag[], onTagPress: (tag: Tag) => void) {
    return tags.map((value) => (
      <TouchableOpacity
        key={value.name}
        style={styles.tagContainer}
        onPress={() => onTagPress(value)}
      >
        <Text style={styles.tagText}>{value.name}</Text>
      </TouchableOpacity>
    ))
  }

  render() {
    const { tags, onTagPress } = this.props
    return (
      <View style={styles.container}>
        { this.renderTags(tags, onTagPress) }
      </View>
    );
  }
}

interface Styles {
  container: ViewStyle,
  tagContainer: ViewStyle,
  tagText: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tagContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderWidth: dimensions.pixel,
    borderColor: colors.primary,
    borderRadius: 4,
  },
  tagText: {
    fontSize: fontSizes.least,
    color: colors.primary,
  },
});