const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const toyService = require('./services/toy-service')
const app = express()
const port = 3030

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())
const cors = require('cors') 
app.use(cors());


app.get('/', (req, res)=>{
    res.json('Mister Toy')
})


app.use(session({
    secret: 'some secret token',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
    }))
    

//Toy List

app.get('/api/toy', (req, res)=>{
    const filterBy = {
        name: req.query.name || '',
        type: req.query.type || 'all',
        fromPrice: req.query.fromPrice || 0,
        toPrice: req.query.toPrice || null,
        type: req.query.type || 'all',
        isInStock: req.query.isInStock || null,
    }

    toyService.query(filterBy)
        .then(toys => res.json(toys))
})


// toy create

app.post('/api/toy', (req, res)=>{
    const {name, price, type, inStock} = req.body
    const toy = {
        name,
        price,
        type,
        inStock,
        createdAt: new Date()
    }
    toyService.save(toy)
        .then(savedToy => {
            res.json(savedToy)
        })
})


// toy Update

app.put('/api/toy', (req, res)=>{
    const {_id, name, price, type, inStock} = req.body
    const toy = {
        _id,
        name,
        price,
        type,
        inStock,
        createdAt: new Date()
    }

    toyService.save(toy)
        .then(savedtoy => {
            res.json(savedtoy)
        })
        .catch(err => {
            res.status(403).json('Cannot add toy')
        })
})


// toy Read Single

app.get('/api/toy/:toyId', (req, res)=>{
    const {toyId} = req.params
    toyService.getById(toyId)
        .then(toy => {
            res.json(toy)
        })
})

// toy Delete
app.delete('/api/toy/:toyId', (req, res) => {
    const { toyId } = req.params
    toyService.remove(toyId)
        .then(() => {
            res.json('Done!')
        })
        .catch(err => {
            res.status(403).json('Cannot delete toy')
        })
})


app.listen(port, () => {
    console.log(`My app listening at http://localhost:${port}`)
})
