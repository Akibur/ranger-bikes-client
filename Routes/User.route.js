const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/User.Controller');

//Create a new user
router.post('/', UserController.createNewUser);

//Get a user by id
router.get('/:email', UserController.findUserByEmail);

//Update a user by id
router.patch('/:id', UserController.updateAUser);

//make admin
router.patch('/', UserController.makeUserAnAdmin);



module.exports = router;
