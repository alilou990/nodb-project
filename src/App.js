import React, {Component} from 'react';
import axios from'axios';


//import components
import Characters from './Components/Characters/Characters'
import Navbar from './Components/Navbar/Navbar'
import CreateCharacter from './Components/CreateCharacter/CreateCharacter'

//import stylesheets
import 'reset-css'
import './App.css'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      characters: [],
      charName: '',
      charClass: '',
      hitDie: '',
      primaryAbility: '',
      imgUrl: '',
      playerName: ''
    }
  }
  
  //lifecycle methods
  componentDidMount(){
    this.getChar();
  }

  //custom methods
  getChar = () => {
    axios.get('/api/characters').then((response) => {
      console.log(response.data)
      this.setState({
        characters: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  createChar = (event) => {
    event.preventDefault();

    const body = {
      charName: this.state.charName,
      charClass: this.state.charClass,
      hitDie: this.state.hitDie,
      primaryAbility: this.state.primaryAbility,
      imgUrl: this.state.imgUrl,
      playerName: this.state.playerName
    }

    axios.post('/api/users', body)
      .then(response => {
        this.setState({
          characters: response.data,
          charName: '',
          charClass: '',
          hitDie: '',
          primaryAbility: '',
          imgUrl: '',
          playerName: ''
        })
      })
  }


  render(){

   console.log(this.state.characters)
    const mappedCharacters = this.state.characters.map((character, index) => {
        return( 
        <Characters character={character} key={index} />
        
        )
      })

    return(
      <div className="character-container">
        <Navbar />
        <CreateCharacter />
        {mappedCharacters}
      </div>
    )
  }
}
