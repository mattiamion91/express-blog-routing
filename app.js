const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) //asset statici di expressjs (middleware)
//rotta index
app.get('/', (req, res) => { //prima rotta preincipale
    res.send('<h1>rotta di home del nostro blog</h1>')

    //res.send('<h1>Server del mio blog</h1>') //il type di default é 'html'
})

//rotta bacheca che mi restiutusice oggetto json con lista post
app.get('/bacheca', (req, res) => {

    //creo un oggetto js da inviare nella res

    const posts = [
        {
            id: 1,
            titolo: "Ciambellone",
            contenuto: "Il classico dolce della nonna, soffice e perfetto per la colazione. Preparato con uova fresche, farina e un tocco di scorza di limone.",
            immagine: "/images/ciambellone.jpeg",
            tags: ["dolce", "colazione", "tradizione", "fatto in casa"]
        },
        {
            id: 2,
            titolo: "Cracker di barbabietole",
            contenuto: "Uno snack croccante e salutare dal colore viola intenso. Ideali da servire durante un aperitivo con salse allo yogurt.",
            immagine: "/images/cracker_barbabietola.jpeg",
            tags: ["snack", "vegano", "healthy", "barbabietola"]
        },
        {
            id: 3,
            titolo: "Pane fritto dolce",
            contenuto: "Una ricetta di recupero golosissima: fette di pane raffermo passate nell'uovo e latte, fritte e ripassate nello zucchero e cannella.",
            immagine: "/images/pane_fritto_dolce.jpeg",
            tags: ["dolce", "riciclo", "comfort food", "merenda"]
        },
        {
            id: 4,
            titolo: "Pasta di barbabietola",
            contenuto: "Un primo piatto scenografico dove la barbabietola frullata crea una crema vellutata che avvolge perfettamente la pasta.",
            immagine: "/images/pasta_barbabietola.jpeg",
            tags: ["primo piatto", "vegetariano", "colore", "barbabietola"]
        },
        {
            id: 5,
            titolo: "Torta paesana",
            contenuto: "Il dolce povero della tradizione lombarda a base di pane raffermo, latte, cacao, pinoli e uvetta. Un'esplosione di sapori antichi.",
            immagine: "/images/torta_paesana.jpeg",
            tags: ["dolce", "tradizione", "lombardia", "cioccolato"]
        }
    ];
    //ritorno risposta con json oggetto posts blog
    res.json({
        count: posts.length,
        posts
    })

})

app.listen(port, () => {
    console.log(`esempio di app in ascolto sulla porta ${port}`); //tempalte litteral perche se in ambiente js
})