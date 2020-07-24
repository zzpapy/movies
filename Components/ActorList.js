// Components/FilmList.js

import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { connect } from 'react-redux'
import ActorDetail from './ActorDetail'
import { getFilmsFromApiWithSearchedText, getActorByName } from '../API/TMDBApi'

class FilmList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: [],
      actors: []
    }
  }

  _loadActors() {
    if (this.props.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getActorByName(this.searchedText, this.page+1).then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            actors: [ ...this.state.actors, ...data.results ],
            isLoading: false
          })
      })
    }
  }

  _displayDetailForActor = (actorId) => {
    this.props.navigation.navigate("Acteur", { actorId: actorId })
  }

  render() {
    return (
        <FlatList
          numColumns={3}
          style={styles.list}
          data={this.props.films}
          extraData={this.props.favoritesFilm}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (          
            <ActorDetail actor={item} displayDetailForActor={this._displayDetailForActor} />                                    
        )}  
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.props.page < this.props.totalPages) {
              this._loadActors()
            }
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmList)