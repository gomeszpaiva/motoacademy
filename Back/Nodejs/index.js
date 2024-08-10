const express = require('express')

const app = express();

app.use(express.json())

let users = [
    {id: 1, name: "Daniela"},
    {id: 2, name: "Felipe"},
]
//app.get recebe dois parâmetros, uma rota e oq eu quero que acontteça quando eu acessar
app.get('/usuarios', (req, res) =>{
    res.status(200).json(users);
})

app.post('/usuarios', (req, res) =>{
    const name = req.body.name;
    const id = users.length+1;
    const newUser = {id, name}
    users.push(newUser);
    res.status(201).json(newUser);
})

app.put("/usuarios/:id", (req,res) => { //passando um id para a rota
    const id = parseInt(req.params.id)
    const {name} = req.body
    const userIndex = users.findIndex(user => user.id == id);
    if(userIndex != -1){
        users[userIndex].name = name;
        res.json(users[userIndex])
    } else{
        res.status(400).json({message: 'Usuário não encontrado'})
    }
})

app.delete('/usuarios/:id', (req,res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.sendStatus(204)
})

app.get('/', (req,res) => {
    res.send({message: "Olá Mundo"})
})

app.listen(3000)