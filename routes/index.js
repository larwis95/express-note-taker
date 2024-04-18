//router method
const router = require('express').Router();

//notes routes js file
const notesRouter = require('../routes/notes');
 
// /api/notes will use the notes.js file for API calls
router.use('/notes', notesRouter);

//exports our router
module.exports = router;