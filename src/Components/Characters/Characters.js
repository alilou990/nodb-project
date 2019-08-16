import React, {Component} from 'react';
import axios from 'axios';
// import * as Icon from 'react-feather';



//this will be the divs that hold the characters that are pre-generated, as well as where any created characters will be stored.
class Characters extends Component {
    constructor(){
        super();

        this.state = {
            edit: false,
            charName: '',
            charClass: '',
            hitDie: '',
            primaryAbility: '',
            imgUrl: '',
            playerName: ''
        }
    }

    handleToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    updateChar = (id) => {
        const updatedChar = {
          id,
          charName: this.state.charName,
          charClass: this.state.charClass,
          hitDie: this.state.hitDie,
          primaryAbility: this.state.primaryAbility,
          imgUrl: this.state.ingUrl,
          playerName: this.state.playerName
        }
        axios.put(`/api/characters/${id}`, updatedChar)
        .then(response => {
          console.log(response)
          this.setState({
            characters: response.data
          })
        })
      }

    render(){
    const {id, charName, charClass, hitDie, primaryAbility, imgUrl, playerName} = this.props.character
    return(
        <div >
            {!this.state.edit
            ?
            (<div className="character-display">
                <h4 className="character-name">{charName}</h4>
                <img src={imgUrl} alt="Player's Character"/>
                <span className="character-info">{charClass}</span>
                <span className="character-info">{hitDie}</span>
                <span className="character-info">{primaryAbility}</span>
                <span className="character-info">{playerName}</span>
                <span onClick={this.handleToggle}>Edit</span>
                <span onClick={() => this.props.deleteChar(id)}>Remove</span>
            </div>)
            :
            (<div className="edit-form">
                <label>Character's Name:</label>
                <input defaultValue={charName} name="charName" onChange= { (e) => this.props.handleOnChange(e)}/>
                <label>Image:</label>
                <input defaultValue={imgUrl} name="imgUrl" onChange={this.props.handleOnChange}/>
                <label>Class:</label>
                <input defaultValue={charClass} name="charClass" onChange={this.props.handleOnChange}/>
                <label>Hit Die:</label>
                <input defaultValue={hitDie} name="hitDie" onChange={this.props.handleOnChange}/>
                <label>Primary Abilities:</label>
                <input defaultValue={primaryAbility} name="primaryAbility" onChange={this.props.handleOnChange}/>
                <label>Player's Name:</label>
                <input defaultValue={playerName} name="playerName" onChange={this.props.handleOnChange}/>
                <span onClick={this.props.updateChar}>Submit</span>
            </div>)
            }
        </div>
    )
    }
}


export default Characters;
