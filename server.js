const express = require('express')

app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

// Ceci est la dernière instruction du fichier, veillez à la garder tout en bas par la suite
app.listen(3000, function () {
    console.log('Listening on port 3000!')
})