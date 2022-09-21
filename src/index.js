// config inicial

import database from './config/database'
import UserModel from './models/users'

const express = require('express')
const app = express()

// forma de ler JSON - usando middlewares
app.use(express.urlencoded({extended: true}))

app.use(express.json())

// rota inicial / endpoint 
app.get('/', (req, res) => {
    // mostrar req

    res.json({ message: 'Tudo certo!' })
})

// entregar uma porta 
const port = 3000

database.connect().then(() => {
    app.listen(port, () => console.log('Api rodando'))
})
