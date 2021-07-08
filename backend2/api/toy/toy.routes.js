const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {createToy,getToy, getToys, deleteToy, updateToy} = require('./toy.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getToys) //Toy List
router.post('/', createToy)// Toy Create
router.put('/', updateToy) //Toy Update
router.get('/:toyId', getToy) //Toy read single
router.delete('/:toyId', deleteToy)//Toy delete

// router.delete('/:toyid',  requireAuth, requireAdmin, deleteToy)//Toy delete

module.exports = router