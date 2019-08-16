import React, {Component} from 'react';

export default class CreateCharacter extends Component {
    constructor(){
        super();
        this.state = {
            charName: '',
            charClass: '',
            hitDie: '',
            primaryAbility: '',
            imgUrl: '',
            playerName: ''
        }
    }
    render(){
        return(
            <div className="character-create-card">
                <label>Character Name:</label>
                <input type="text" value={this.state.charName} onChange={(e) => ({charName: e.target.value})}/>
                <label>Class:</label>
                <input type="text" value={this.state.charClass} onChange={(e) => ({charClass: e.target.value})}/>
                <label>Hit Die:</label>
                <input type="text" value={this.state.hitDie} onChange={(e) => ({hitDie: e.target.value})}/>
                <label>Primary Abilities:</label>
                <input type="text" value={this.state.primaryAbility} onChange={(e) => ({primaryAbility: e.target.value})}/>
                <label>Character Image URL:</label>
                <input type="url" value={this.state.imgUrl} onChange={(e) => ({imgUrl: e.target.value})}/>
                <label>Player's Name:</label>
                <input type="text" value={this.state.playerName} onChange={(e) => ({playerName: e.target.value})}/>
            </div>
        )
    }
}