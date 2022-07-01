const express = require('express')
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})
const sequelize  = require('../server/database/index');

const app = express()

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

/**
 * Структура: 
 * MacMaster
 * -node_modules
 * -server
 * --database
 * ---models
 * ---index.js
 * --.env
 * --index.js
 * -.gitignore
 * -readme
 * -package-lock
 * -pachage
 */


