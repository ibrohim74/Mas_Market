const Router = require('express');
const router = new Router();
const brandController = require('../controller/brandController');
const checkRole = require('../middleware/checkRoleMiddleWare');


router.post('/', checkRole("ADMIN"), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;
