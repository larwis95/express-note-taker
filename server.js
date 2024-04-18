const express = require('express');
const path = require('path');

//modular route index.js
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware for our requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

//sends the static assets
app.use(express.static('public'));

//sends the index.html for /notes path
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
