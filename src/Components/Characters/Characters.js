import React, {Component} from 'react';
import axios from 'axios';
// import * as Icon from 'react-feather';

import './Characters.css'

//this will be the divs that hold the characters that are pre-generated, as well as where any created characters will be stored.
class Characters extends Component {
    constructor(){
        super();

        this.state = {
            edit: false,
            editCharName: '',
            editCharClass: '',
            editHitDie: '',
            editPrimaryAbility: '',
            editImgUrl: '',
            editPlayerName: ''
        }
    }
    handleToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    updateChar = (id) => {
        
        let updatedChar = {
            charName: this.state.editCharName,
            charClass: this.state.editCharClass,
            hitDie: this.state.editHitDie,
            primaryAbility: this.state.editPrimaryAbility,
            imgUrl: this.state.editImgUrl,
            playerName: this.state.editPlayerName
        }
        axios.put(`/api/characters/${id}`, updatedChar)
        .then(response => {

          this.props.updateChar(response.data)
          this.handleToggle()
        })
      };

   

    render(){
    const {id, charName, charClass, hitDie, primaryAbility, imgUrl, playerName} = this.props.character
    return(
        <div className="main-character-display-card">
            {!this.state.edit
            ?
            (<div className="character-display">
                <h4 className="character-name">{charName}</h4>
                <img className="character-image" src={imgUrl} alt="Player's Character"/>
                <div className="character-info">
                <label className="labels">Class: </label>
                <span>{charClass}</span>
                <label className="labels">Hit Die: </label>
                <span>{hitDie}</span>
                <div className="character-info">
                <label className="labels">Primary Abilities: </label>
                <span>{primaryAbility}</span>
                <label className="labels">Player's Name: </label>
                <span>{playerName}</span>
                </div>
                </div>
                <span onClick={this.handleToggle}>Edit >> </span>
                <span onClick={() => this.props.deleteChar(id)}>Remove >> </span>
            </div>)
            :
            (<div className="edit-form">
                <label>Character's Name:</label>
                <input defaultValue={charName} name="charName" onChange= {this.props.handleOnChange}/>
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
                <span onClick={() => this.updateChar(id)}>Submit >> </span>
            </div>)
            }
        </div>
    )
    }
};


export default Characters;
