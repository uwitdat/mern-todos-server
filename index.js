import express from 'express'
require('dotenv').config();
import mongoose from 'mongoose'
import cors from 'cors'
import todosRoutes from './routes/todos.js'
const app = express()



app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use('/todos', todosRoutes)



app.get('/', (req, res) => {
    res.send('<h1>WELCOME TO SERVER</h1>')
})


const PORT = process.env.PORT || 5000
mongoose.connect(process.env.DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },

).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
}).catch(err => {
    console.log('ERROR', err)
})