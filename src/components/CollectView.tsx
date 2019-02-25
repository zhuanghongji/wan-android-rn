import React from 'react';
import {
  StyleSheet, 
  TouchableOpacity,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';

import { images } from '../res';

export interface Props {
  collect: boolean;
  onCollectPress: (toCollect: boolean) => void;
}

interface State {
}

export class CollectView extends React.Component<Props, State> {

  render() {
    const { collect, onCollectPress } = this.props
    const source = collect ? images.icLikeTrue : images.icLikeFalse
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={() => onCollectPress(!collect)}
      >
        <Image 
          style={styles.icCollect} 
          source={source}
        />
      </TouchableOpacity>
    );
  }
}

interface Styles {
  container: ViewStyle,
  icCollect: ImageStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingLeft: 4,
  },
  icCollect: {
    width: 18,
    height: 18,
  }
});