const notes = require('express').Router();
const fs = require('fs');
const id = require('../helpers/id');
const db = './db/db.json';

notes.get('/', (req, res) => {
    console.info(`${req.method} for notes.`);
    fs.readFile(db, (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
        }
    })
});

notes.post('/', (req, res) => {
    console.info(`${req.method} for notes.`);
    console.log(req.body)
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: id()
        };
        fs.readFile(db, (err, data) => {
            if (!err) {
                const dataArr = JSON.parse(data);
                console.log(dataArr);
                dataArr.push(newNote);
                fs.writeFile(db, JSON.stringify(dataArr), (err) => err ? console.info(err) : console.info('Sucessfully wrote to /db/db.json!'));
                res.json('Note added sucessfully!');
                }
            });
        }
        else {
            res.error('Error in adding note.');
        }
    });

module.exports = notes;