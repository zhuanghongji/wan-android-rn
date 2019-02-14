import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native'

import {
 dimensions,
} from '../../res'

interface Props {
}

interface State {
}

interface Styles {
}

/**
 * 组件：搜索热词
 */
export default class NavigationItemView extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.navigationItem = props.navigationItem
  }

  onNavigationArticlePress(article) {
    this.props.onNavigationArticlePress(article)
  }

  renderNavigationArticle(article) {
    return (
      <TouchableOpacity 
        style={styles.navigationArticle}
        onPress={() => {this.onNavigationArticlePress(article)}}
      >
        <Text style={styles.text} >{article.title}</Text>
      </TouchableOpacity>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.navigationItemName}>{this.navigationItem.name}</Text>

        <FlatList
          style={styles.flatList}
          data={this.navigationItem.articles}
          keyExtractor={(article) => article.title}
          numColumns={3}
          renderItem={({ item }) => (
            this.renderNavigationArticle(item)
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: dimensions.screenWidth,
    marginVertical: 12,
  },
  navigationItemName: {
    color: '#235C87'
  },
  flatList: {
    width: dimensions.screenWidth,
  },
  navigationArticle: {
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