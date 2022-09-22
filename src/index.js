// config inicial

import database from './config/database'
import userRoute from './routes/userRoutes'
import Express  from 'express'
import bodyParser from 'body-parser'

const app = Express()

// entregar uma porta 
const port = 3000

// forma de ler JSON - usando middlewares
app.use(bodyParser.urlencoded({extended: false }))

app.use(Express.json())

userRoute(app)

// rota inicial / endpoint 
app.get('/', (req, res) => {
    // mostrar req

    res.json({ message: 'Tudo certo!' })
})



database.connect().then(() => {
    app.listen(port, () => console.log('Api rodando'))
})
