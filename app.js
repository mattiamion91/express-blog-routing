const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) //asset statici di expressjs (middleware)
//rotta index
app.get('/', (req, res) => { //prima rotta preincipale
    res.send('<h1>rotta di home del nostro blog</h1>')

    //res.send('<h1>Server del mio blog</h1>') //il type di default é 'html'
})

//rotte di crud
// index
app.get('/posts', function (req, res) {
    res.send('Lista delle pizze');
});
// show
app.get('/posts/:id', function (req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
});
// store
app.post('/posts', function (req, res) {
    res.send('Creazione nuova pizza');
});
// update
app.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});
// modify
app.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
});
// destroy
app.delete('/posts/:id', function (req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
});

// Avvia il server e lo mette in ascolto per richieste HTTP sulla porta specificata
app.listen(port, () => {
    console.log(`esempio di app in ascolto sulla porta ${port}`); //tempalte litteral perche se in ambiente js
})