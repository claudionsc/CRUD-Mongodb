import UserModel from '../models/users'

const userRoute = (app) => {
    
    app.route('/person/:id?')
        .get( async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                query._id = id
            }
            try{
                const persons = await UserModel.find(query)
                res.send({persons})
            }catch(error){
                res.status(400).send({error: 'Falha'})
            }
        })

        .post( async (req, res) => {    
            // validar se os dados foram enviados
            const { name, salary, approved } = req.body

            if(!name || !salary) {
                res.status(422).send('Os dados são obrigatórios')
            }

            const person = {
                name, 
                salary,
                approved,
            }
            
            try{        
                
                await UserModel.create(person)
        
                res.status(201).send('Pessoa inserida com sucesso')
                
            } catch(error){
                res.send(error)
            }
        
    }

)}

module.exports = userRoute
