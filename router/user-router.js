const router = require('express').Router();
const { userController } = require('../controller');

router.post('/', userController.loginUser);

module.exports = router;