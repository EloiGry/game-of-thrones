import './App.css';

import React, { Component } from 'react';
import Character from './components/Character';
import 'bootstrap/dist/css/bootstrap.min.css'
import Favorite from './components/Favorite';

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites : [],
      showFavorites : false
    }
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.showFavorites= this.showFavorites.bind(this)
    this.hideFavorites = this.hideFavorites.bind(this)

  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(result => {
        this.setState({characters: result})
      })
  }

  handleFavoriteClick (name) {
    const character = this.state.characters.find(character => character.fullName === name)
    this.setState ({favorites : [...this.state.favorites, character]})
  }

  showFavorites () {
    this.setState ({showFavorites : true })
  }

  hideFavorites () {
    this.setState ({showFavorites : false })
  }


  render() {
    console.log(this.state.favorites)
    return (
      <div className="container">
        <h1>
          Game of Thrones
        </h1>
        {this.state.showFavorites ? 
          (<button onClick={this.hideFavorites} className="btn btn-outline-secondary"> All characters </button>) : 
          (<button onClick={this.showFavorites} className="btn btn-outline-warning"> Voir les favoris</button> 
        )}
        
        
        {this.state.showFavorites ? (this.state.favorites.map(favorite =>
          <>
            
            <Favorite
                name={favorite.fullName}
                key={favorite.id}
                title={favorite.title}
                image={favorite.imageUrl} 
            />  
          </>
        )) : (
         <> 
            <div className="row">
              {this.state.characters.map(character => 
                <Character
                  click={this.handleFavoriteClick}
                  name={character.fullName}
                  key={character.id}
                  title={character.title}
                  image={character.imageUrl}
                  showFavorites = {this.state.favorites.find(favorite => favorite.fullName === character.fullName)}
                />
              )}
            </div>
        </>
        )}

        
      </div>
    );
  }
}

export default App;
