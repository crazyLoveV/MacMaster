const Router = require('express')
const auth_router = new Router()

// Controllers
const auth_controller = require('../controllers/auth_controller')
const auth = new auth_controller()


//Router
auth_router.post('/registration', auth.registration)
auth_router.post('/login', auth.login)
auth_router.get('/getUsers', auth.getUsers)



module.exports = auth_router