const toyService = require('./toy.service')
const socketService = require('../../services/socket.service')
const logger = require('../../services/logger.service')

async function getToy(req, res) {
    try {
        const { toyId } = req.params
        const toy = await toyService.getById(toyId)
        res.send(toy)
    } catch (err) {
        logger.error('Failed to get toy', err)
        res.status(500).send({ err: 'Failed to get toy' })
    }
}

async function getToys(req, res) {
    try {
        const filterBy = {
            name: req.query.name || '',
            type: req.query.type || 'all',
            fromPrice: req.query.fromPrice || 0,
            toPrice: req.query.toPrice || null,
            type: req.query.type || 'all',
            isInStock: req.query.isInStock || null,
        }
        const toys = await toyService.query(filterBy)
        res.send(toys)
    } catch (err) {
        logger.error('Failed to get toys', err)
        res.status(500).send({ err: 'Failed to get toys' })
    }
}

async function deleteToy(req, res) {
    try {
        const { toyId } = req.params
        await toyService.remove(toyId)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete toy', err)
        res.status(500).send({ err: 'Failed to delete toy' })
    }
}

async function createToy(req, res){
    try {
        const {name, price, type, inStock} = req.body
        const toy = {
            name,
            price,
            type,
            inStock,
            createdAt: new Date()
        }
        const newToy = await toyService.add(toy)
        res.send(newToy)
    } catch (err) {
        logger.error('Failed to create toy', err)
        res.status(500).send({ err: 'Failed to create toy' })
    }
}

async function updateToy(req, res) {
    try {
        const {_id, name, price, type, inStock} = req.body
        const toy = {
            _id,
            name,
            price,
            type,
            inStock,
            createdAt: new Date()
        }
        console.log(toy)
        const savedToy = await toyService.update(toy)
        res.send(savedToy)
        socketService.broadcast({type: 'toy-updated', data: review, to:savedToy._id})
    } catch (err) {
        logger.error('Failed to update toy', err)
        res.status(500).send({ err: 'Failed to update toy' })
    }
}

module.exports = {
    getToy,
    getToys,
    deleteToy,
    updateToy,
    createToy
}