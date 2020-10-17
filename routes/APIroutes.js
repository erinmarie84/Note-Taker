const path = require('path');
const fs = require('fs');
const router = require('express').Router();

let nextId;
let notes;

fs.readFile('./db/db.json', function (err, data) {
    if (err) throw err;
    notes = JSON.parse(data);
    currentId = notes[notes.length-1].id
    nextId = currentId +1
    console.log(notes)
    console.log(nextId)
});

// Displays all notes
router.get('/notes', function(req, res) {
    return res.json(notes);
});

// Displays a single note, or returns false
router.get('/notes/:id', function (req, res) {
    var display = req.params.id;

    console.log(display)

    for (var i = 0; i < notes.length; i++) {
        if (display == notes[i].id) {
            return res.json(notes[i]);
        }
    }

    return res.json(false);
});

//Create new note - takes in JSON input
router.post('/notes', function (req, res) {
    var newNote = req.body;

    newNote.id = nextId
    nextId++

    console.log(newNote);

    notes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes), function(err){
        if (err) throw err
    });

    res.json(newNote);
});

router.delete('/notes/:id', function(req, res) {
    var display = req.params.id;

    console.log(display);

    for (var i = 0; i < notes.length; i++) {
        if (display == notes[i].id) {
            notes.splice(i, 1);
        }
    }
    fs.writeFile('./db/db.json', JSON.stringify(notes), function (err) {
        if (err) throw err
    });

    console.log('Deleted')
    return res.json(notes);
})

module.exports = router;
