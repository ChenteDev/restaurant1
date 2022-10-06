const  { Router } = require('express');
const  router = Router();
const {  dishesGet, dishesPost, dishesPut,  dishesDelete } = require('../controllers/dish.controllers')

router.get('/', dishesGet );

router.post('/', dishesPost)

router.put('/', dishesPut)

router.delete('/', dishesDelete)


module.exports = router;