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
            editPrimaryAbility: '',
            editImgUrl: '',
        }
    }

    componentDidMount(){
        this.setState({
            editCharName: this.props.character.charName,
            editCharClass: this.props.character.charClass,
            editPrimaryAbility: this.props.character.primaryAbility,
            editImgUrl: this.props.character.imgUrl
        })
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
            primaryAbility: this.state.editPrimaryAbility,
            imgUrl: this.state.editImgUrl,
        }
        axios.put(`/api/characters/${id}`, updatedChar)
        .then(response => {

          this.props.updateChar(response.data)
          this.handleToggle()
        })
      };

      handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        })  
        
      }

   

    render(){
    const {id, charName, charClass, primaryAbility, imgUrl} = this.props.character
    return(
        <div className="main-character-display-card">
            {!this.state.edit
            ?
            (<div className="character-display">
                <h4 className="character-name">{charName}</h4>
                <img className="character-image" src={imgUrl} alt="Player's Character"/>
                <div className="character-outputs">
                    <span>{charClass}</span>
                    <span>{primaryAbility}</span>

                </div>
                <div className="buttons">
                    <button onClick={this.handleToggle}>Edit >> </button>
                    <button onClick={() => this.props.deleteChar(id)}>Remove >> </button>
                </div>
            </div>)
            :
            (<div className="edit-form">
                <div className="character-inputs">
                    <label>Character's Name:</label>
                    <input defaultValue={charName} name="editCharName" onChange= {(event) => this.handleOnChange(event)}/>
                    <label>Image:</label>
                    <input defaultValue={imgUrl} name="editImgUrl" onChange={(event) => this.handleOnChange(event)}/>
                </div>
                <div className="character-inputs">
                    <label>Class:</label>
                    <input defaultValue={charClass} name="editCharClass" onChange={(event)=> this.handleOnChange(event)}/>
                    <label>Primary Abilities:</label>
                    <input defaultValue={primaryAbility} name="editPrimaryAbility" onChange={(event) => this.handleOnChange(event)}/>
                </div>
                <div className="edit-submit">
                    <button onClick={() => this.updateChar(id)}>Submit >> </button>
                </div>
            </div>)
            }
        </div>
    )
    };
};


export default Characters;
