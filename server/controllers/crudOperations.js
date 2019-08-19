let characters = [
    {
        id: 1,
        charName: "Unathana Goblinsfoe",
        charClass: "Rogue",
        primaryAbility: "Dexterity",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rVLPqsW1fbgl5D81mXSSFLYPHnoYEkTf0-Pq1z_pdBYHD3ABZw"
    },
    {
        id: 2,
        charName: "Caiatris Duskwalker",
        charClass: "Druid",
        primaryAbility: "Wisdom",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkfDtCkuU0k9JjoEr0l8ItHUkDlQfZYF9PNn2EPvbrFgEoPrULQ"
    },
    {
        id: 3,
        charName: "Otiben Lorearthen",
        charClass: "Paladin",
        primaryAbility: "Strength and Charisma",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-0meGiYEJXRj0dinItXRrCUxs7k8mwEi88xsZV3V4GUi_VF2Cw"
    }
]



const getChar = (req, res) => {
    res.status(200).send(characters)
};

const createChar = (req, res) => {
    const {charName, charClass, primaryAbility, imgUrl} = req.body;

    let id;

    if(characters.length === 0){
        id = 1
    } else {
        characters[characters.length - 1].id + 1
    }

    const newChar = {
        charName,
        charClass,
        primaryAbility,
        imgUrl
    }

    characters.push(newChar);



    res.status(200).send(characters)
};

const updateChar = (req, res) => {
    const {id} = req.params;
    const updatedChar = req.body;

    let updateThisChar = characters.find((element) => {
        return element.id === +id
    })
    
    updateThisChar.charName = updatedChar.charName
    updateThisChar.charClass = updatedChar.charClass
    updateThisChar.primaryAbility = updatedChar.primaryAbility
    updateThisChar.imgUrl = updatedChar.imgUrl

    res.status(200).send(characters)
};



const deleteChar = (req, res) => {
    const {id} = req.params;
    
    characters = characters.filter((characters) => characters.id !== +id)
    res.status(200).send(characters)
}



module.exports = {
    getChar,
    createChar,
    updateChar,
    deleteChar
}