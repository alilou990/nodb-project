const characters = require('../data')



const getChar = (req, res) => {
    res.status(200).send(characters.characters)
};

const createChar = (req, res) => {
    const {charName, charClass, hitDie, primaryAbility, imgUrl, playerName} = req.body;

    let id;

    if(characters.characters.length === 0){
        id = 1
    } else {
        characters.characters[characters.characters.length - 1].id + 1
    }

    const newChar = {
        charName,
        charClass,
        hitDie,
        primaryAbility,
        imgUrl,
        playerName
    }

    characters.characters.push(newChar);



    res.status(200).send(characters.characters)
}

const updateChar = (req, res) => {
    const {id} = req.params;
    const updatedChar = req.body;
    

    let thisChar = characters.characters.find((characters) => {
        characters.id === +id
    })
    

    thisChar.charName = updatedChar.editCharName,
    thisChar.charClass = updatedChar.editCharClass,
    thisChar.hitDie = updatedChar.editHitDie,
    thisChar.primaryAbility = updatedChar.editPrimaryAbility,
    thisChar.imgUrl = updatedChar.editImgUrl,
    thisChar.playerName = updatedChar.editPlayerName


    res.status(200).send(characters.characters)
};



const deleteChar = (req, res) => {
    const {id} = req.params;
    
    characters.characters = characters.characters.filter((characters) => characters.id !== +id)
    res.status(200).send(characters.characters)
}



module.exports = {
    getChar,
    createChar,
    updateChar,
    deleteChar
}