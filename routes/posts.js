//importo express
const express = require('express');
//creo istanza oggetto rotte
const router = express.Router();

//rotte di crud
// index
router.get('/posts', function (req, res) {
    res.send('Lista delle pizze');
});
// show
router.get('/posts/:id', function (req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
});
// store
router.post('/posts', function (req, res) {
    res.send('Creazione nuova pizza');
});
// update
router.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});
// modify
router.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
});
// destroy
router.delete('/posts/:id', function (req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
});

//esporto istanza rootte
module.exports = router;