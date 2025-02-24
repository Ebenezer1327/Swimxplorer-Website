const express = require('express');
const signupController = require('../controllers/signupController');

const router = express.Router();

router.get('/', signupController.listUsers);
router.post('/', signupController.createUser);
router.get('/:id', signupController.getUser);
router.put('/:id', signupController.updateUser);
router.delete('/:id', signupController.deleteUser);

module.exports = router;
