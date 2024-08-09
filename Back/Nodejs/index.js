const express = require('express')

const app = express();
app.use(express.json())

const users = [
    {id: 1, name: "Daniela"},
    {id: 2, name: "Felipe"}
]
//app.get recebe dois parâmetros, uma rota e oq eu quero que acontteça quando eu acessar
app.get('/usuarios', (req, res) =>{
    res.json(users);
})

app.post('/usuarios', (req, res) =>{
    const name = req.body.name;
    const id = users.length+1;
    const newUser = {id, name}
    users.push(newUser);
    res.status(201).json(newUser);
})

app.get('/', (req,res) => {
    res.send({message: "Olá Mundo"})
})

app.listen(3000)