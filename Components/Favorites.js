// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import Avatar from './Avatar'

class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.avatar_container}>
          <Avatar/>
          <Text>Mes Favoris</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({})

export default Favorites