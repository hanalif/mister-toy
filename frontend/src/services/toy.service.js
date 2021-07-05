
import {storageService} from '../services/async-storage.service.js'
import {utilService} from '../services/util.service.js'

const KEY = 'toyDB';

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

// This is like the backend
_createToys()

// TODO: support paging and filtering and sorting
function query() {
    return storageService.query(KEY)
}

function getById(id) {
    return storageService.get(KEY, id)
}

function remove(id) {
    return storageService.remove(KEY, id)
}

function save(toy) {
    const savedToy = (toy._id) ? storageService.put(KEY, toy) : storageService.post(KEY, toy)
    return savedToy;
}


function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: 0,
        type: '',
        createdAt: new Date(),
        inStock: true
    }
}


function _createToys() {
    var toys = JSON.parse(localStorage.getItem(KEY))
    if (!toys || !toys.length) {
        toys = [
            _createToy('train', 145,'vehicle'),
            _createToy('doll', 30, 'children'),
            _createToy('ball', 90, 'sports'),
            _createToy('teddy bear', 170, 'children'),
            _createToy('kite', 50, 'sports'),
            _createToy('rubber ducky', 100, 'children'),
            _createToy('airplane', 150, 'vehicle')   
        ]
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
    return toys;
}

function _createToy(name, price, type) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        type,
        createdAt: new Date(),
        inStock: true
    }
}



