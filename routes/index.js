const router = require('express').Router();

const notesRouter = require('../routes/notes');

router.use('/notes', notesRouter);

module.exports = router;