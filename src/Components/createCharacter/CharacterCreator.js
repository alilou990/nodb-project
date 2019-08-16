import React, {Component} from 'react';

export default class CharacterCreator extends Component {
    render(){
        return(
            <div className="character-create-card">
                <label>Character Name:</label>
                <input type="text" name="charName" onChange={this.props.handleOnChange}></input>
                <label>Class:</label>
                <input type="text" name="charClass" onChange={this.props.handleOnChange}></input>
                <label>Hit Die:</label>
                <input type="text" name="hitDie" onChange={this.props.handleOnChange}></input>
                <label>Primary Abilities:</label>
                <input type="text" name="primaryAbility" onChange={this.props.handleOnChange}></input>
                <label>Character Image URL:</label>
                <input type="text" name="imageUrl" onChange={this.props.handleChange}></input>
                <label>Players Name:</label>
                <input type="text" name="playerName" onChange={this.props.handleOnChange}></input>
                <span onClick={this.props.createChar}>Submit</span>
                
                

            </div>
        )
    }
}