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

notes.delete('/:note_id', (req, res) => {
    if (req.params.note_id) {
        const id = Number(req.params.note_id);
        console.info(`${req.method} for note id: ${id}`);
        fs.readFile(db, (err, data) => {
            if (err) {
                console.info(err);
            }
            const notes = JSON.parse(data);
            for (let i = 0; i < notes.length; i++) {
                console.log(notes[i].note_id)
                if (notes[i].note_id === id) {
                    notes.splice(i, 1);
                }
            }
            fs.writeFile(db, JSON.stringify(notes), (err) => err ? console.log(err) : console.log(`Sucessfully wrote to ${db}`));
        });
        const response = {
            status: 'success',
          };
        console.log(response);
        res.status(201).json(response);
    }
    else {
        res.status(500).json('Error in deleteing note.');
    }
});

module.exports = notes;