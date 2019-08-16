import React from 'react';



//this will be the divs that hold the characters that are pre-generated, as well as where any created characters will be stored.
function Characters(props) {
    const {charName, charClass, hitDie, primaryAbility, imgUrl, playerName} = props.character
    return(
        <div >
            <div>
                <p>{charName}</p>
                <p>{charClass}</p>
                <p>{hitDie}</p>
                <p>{primaryAbility}</p>
                <p>{imgUrl}</p>
                <p>{playerName}</p>
            </div>

        </div>
    )
}


export default Characters;
