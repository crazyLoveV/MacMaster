const Router = require('express')
const router = new Router()

// Controllers
const auth_controller = require('../controllers/auth_controller')



//Routers
router.post('/registration', auth_controller.registration)
router.post('/login', auth_controller.login)
router.get('/getUsers', auth_controller.getUsers)



module.exports = router