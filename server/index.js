const express = require('express');
const cors = require('cors');
const ctrl = require('./controllers/crudOperations');

const app = express();


//TML
app.use(express.json());
app.use(cors());

//Endpoints

app.get('/api/characters', ctrl.getChar)
app.post('/api/characters', ctrl.createChar);
app.put('/api/characters/:id', ctrl.updatedClass, ctrl.updatedHitDie, ctrl.updatedPrimaryAbility, ctrl.updatedImgUrl, ctrl.updatedCharName, ctrl.updatedPlayerName);
app.delete('/api/charachers/:id', ctrl.deleteChar);






app.listen(8080, () => {
    console.log('Server is up and running! 👾');
});