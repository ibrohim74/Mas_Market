const Router = require('express');
const router = new Router();
const deviceController = require('../controller/deviceController');
const checkRole = require('../middleware/checkRoleMiddleWare');
router.post('/',checkRole("ADMIN"), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);


module.exports = router;
