const express = require('express')
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})
var bodyParser = require('body-parser')


const sequelize  = require('./database/index');
const router = require('./router/router')

// Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const app = express()

//Router
app.use('/authorization', router)


//Шаблонизатор
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('main.pug', { title: 'Greetings from Pug' })
})

//  
let port = process.env.PORT || 5000

const start = async() =>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      app.listen(port, async () => {
        console.log(`Server is listening on port ${port}`)
      })
        
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      console.log(error);
    }
}
start()




