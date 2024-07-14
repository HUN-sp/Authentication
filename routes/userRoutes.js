const router = require('express').Router();

const userControllers = require('../controllers/userController');

//Create

router.post('/',userControllers.createAllUsers);

//GET

router.get('/',userControllers.getAllUsers);

//GETById

router.get('/:id',userControllers.getById);

//Update

router.put('/:id',userControllers.update);

//DELETE

router.delete('/:id',userControllers.delete);

module.exports = router;