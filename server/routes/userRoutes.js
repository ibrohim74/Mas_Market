const Router = require('express');
const router = new Router();
const userController = require('../controller/userController');
const userMiddleWare = require('../middleware/authMiddleware')

router.post('/registration' , userController.registration) ;
router.post('/login', userController.login);
router.get('/auth' ,userMiddleWare, userController.check);


module.exports = router;
