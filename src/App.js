import React, {Component} from 'react';
import axios from'axios';



//import components
import Characters from './Components/Characters/Characters'
import Navbar from './Components/Navbar/Navbar'
import CharacterCreator from './Components/CreateCharacter/CharacterCreator'
import Footer from './Components/Footer/Footer'

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
      primaryAbility: '',
      imgUrl: ''
    }
  }
  
  //lifecycle methods
  componentDidMount(){
    this.getChar();
  }

  //custom methods
  getChar = () => {
    axios.get('/api/characters').then((response) => {
      this.setState({
        characters: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  createChar = (event) => {
      const body = {
      charName: this.state.charName,
      charClass: this.state.charClass,
      primaryAbility: this.state.primaryAbility,
      imgUrl: this.state.imgUrl,
    }
    
    axios.post('/api/characters', body)
      .then(response => {
        this.setState({
          characters: response.data,
          charName: '',
          charClass: '',
          primaryAbility: '',
          imgUrl: ''
        })
          
      })
      .catch((error) => {
        console.log(error)
      })
      
  };



  updateChar = (data) => {
    this.setState({
      characters: data
    })
  }



  deleteChar = (id) => {
    axios.delete(`/api/characters/${id}`)
      .then(response => {
        this.setState({
          characters: response.data,
        })
      })
  }

  handleOnChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  render(){
    const mappedCharacters = this.state.characters.map((character, index) => {
        return( 
        <Characters character={character} key={index} updateChar={this.updateChar} deleteChar={this.deleteChar} />
        )
      })
    return(
      <div className="character-container">
        <Navbar />
        <CharacterCreator createChar={this.createChar} handleOnChange={this.handleOnChange} charName={this.state.charName} charClass={this.state.charClass} primaryAbility= {this.state.primaryAbility} imgUrl={this.state.imgUrl} />
        {mappedCharacters}
        <Footer />
      </div>
    )
  }
}
