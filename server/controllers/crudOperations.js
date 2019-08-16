const characters = require('../data')



const getChar = (req, res) => {
    res.status(200).send(characters.characters)
};

const createChar = (req, res) => {
    const {charName, charClass, hitDie, primaryAbility, saves, imgUrl, playerName} = req.body;

    let id;

    if(characters.length === 0){
        id = 1
    } else {
        characters[characters.length - 1].id + 1
    }

    const newChar = {
        charName,
        charClass,
        hitDie,
        primaryAbility,
        saves,
        imgUrl,
        playerName
    }

    characters.push(newChar);

    res.status(200).send(characters)
}

const updatedClass = (req, res) => {
    const {id} = req.params;
    const updatedClass = req.body

    let thisChar = characters.find(characters => {
        characters.id === +id
    })

    thisChar.class = updatedClass.class

    res.status(200).send(characters)
}

const updatedHitDie = (req, res) => {
    const {id} = req.params;
    const updatedHitDie = req.body;

    let thisChar = characters.find(characters => {
        characters.id === +id
    })

    thisChar.hitDie = updatedHitDie.hitDie

    res.status(200).send(characters)
}

const updatedPrimaryAbility = (req, res) => {
    const {id} = req.params;
    const updatedPrimaryAbility = req.body;

    let thisChar = characters.find(characters => {
        characters.id === +id
    });

    thisChar.primaryAbility = updatedPrimaryAbility.primaryAbility;

    res.status(200).send(characters);
};

const updatedImgUrl = (req, res) => {
    const {id} = req.params;
    const updatedPrimaryAbility = req.body;

    let thisChar = characters.find(characters => {
        characters.id === +id
    })

    thisChar.primaryAbility = updatedPrimaryAbility.primaryAbility;

    res.status(200).send(characters)
}

const updatedCharName = (req, res) => {
    const {id} = req.params;
    const updatedCharName = req.body;

    let thisChar = characters.find(characters => {
        characters.id === +id
    })

    thisChar.charName = updatedCharName.charName

    res.status(200).send(characters)
}

const updatedPlayerName = (req, res) => {
    const {id} = req.params;
    const updatedPlayerName = req.body;

    let thisChar = characters.find(characters => {
        characters.id === +id
    })

    thisChar.playerName = updatedPlayerName.playerName

    res.status(200).send(characters)
}

const deleteChar = (req, res) => {
    const {id} = req.params;
    
    pets = pets.filter((pets) => {pets.id !== +id})

    res.send(200).send(characters)
}



module.exports = {
    getChar,
    createChar,
    updatedClass,
    updatedHitDie,
    updatedPrimaryAbility,
    updatedImgUrl,
    updatedCharName,
    updatedPlayerName,
    deleteChar
}