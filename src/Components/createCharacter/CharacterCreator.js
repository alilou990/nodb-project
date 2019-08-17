import React, {Component} from 'react';
import './CreateCharacter.css'

export default class CharacterCreator extends Component {
    render(){
        return(
        <div className="character-create-card-outer">
            <div className="character-create-card-inner">
                <div className="inputs">
                <label>Character Name:</label>
                <input type="text" name="charName" onChange={this.props.handleOnChange}></input>
                <label>Class:</label>
                <input type="text" name="charClass" onChange={this.props.handleOnChange}></input>
                <label>Hit Die:</label>
                <input type="text" name="hitDie" onChange={this.props.handleOnChange}></input>
                </div>
               <div className="inputs">
                <label>Primary Abilities:</label>
                <input type="text" name="primaryAbility" onChange={this.props.handleOnChange}></input>
                <label>Character Image URL:</label>
                <input type="text" name="imageUrl" onChange={this.props.handleChange}></input>
                <label>Players Name:</label>
                <input type="text" name="playerName" onChange={this.props.handleOnChange}></input>
                </div>
                <div className="submit-button">
                <span onClick={this.props.createChar}>Create Character >> </span>
                </div>
                

            </div>
        </div>
        )
    }
}