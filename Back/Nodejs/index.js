const express = require('express')

const app = express();

app.get('/', (req,res) => {
    res.send({message: "Olá Mundo"})
})

app.listen(3000)