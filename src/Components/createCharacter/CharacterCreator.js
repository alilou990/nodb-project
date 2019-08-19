import React, {Component} from 'react';
import './CreateCharacter.css'

export default class CharacterCreator extends Component {
    render(){
        return(
        <div className="character-create-card-outer">
            <div className="character-create-card-inner">
                <div className="inputs">
                <label>Character Name:</label>
                <input type="text" name="charName" onChange={this.props.handleOnChange} value={this.props.charName}></input>
                <label>Class:</label>
                <input type="text" name="charClass" onChange={this.props.handleOnChange} value={this.props.charClass}></input>
                </div>
               <div className="inputs">
                <label>Primary Abilities:</label>
                <input type="text" name="primaryAbility" onChange={this.props.handleOnChange} value={this.props.primaryAbility}></input>
                <label>Character Image URL:</label>
                <input type="text" name="imgUrl" onChange={this.props.handleOnChange} value={this.props.imgUrl}></input>
                </div>
                <div className="submit-button">
                <button onClick={this.props.createChar}>Create Character >> </button>
                </div>
                

            </div>
        </div>
        )
    }
}