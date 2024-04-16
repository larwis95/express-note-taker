const notes = require('express').Router();
const fs = require('fs');
const id = require('../helpers/id');

notes.get('/', (req, res) => {
    console.info(`${req.method} for notes.`);
    fs.readFile('./db/db.json', (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
        }
    })
});

notes.post('/notes', (req, res) => {
    console.info(`${req.method} for notes.`);
    
})

module.exports = notes;