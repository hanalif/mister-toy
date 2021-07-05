
// import {storageService} from '../services/async-storage.service.js'
// import {utilService} from '../services/util.service.js'
import axios from 'axios'

const KEY = 'toyDB';
const SERVER_PATH = 'http://localhost:3030'

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

// This is like the backend
// _createToys()

// TODO: support paging and filtering and sorting
function query(filterBy) {
    // return storageService.query(KEY)
    return axios.get('http://localhost:3030/api/toy', { params: filterBy }).then(res => res.data);
}

function getById(id) {
    // return storageService.get(KEY, id)
    return axios.get(`http://localhost:3030/api/toy/${id}`).then(res => res.data)
}

function remove(id) {
    // return storageService.remove(KEY, id)
    return axios.delete(`http://localhost:3030/api/toy/${id}`).then(res => res.data)
}

function save(toy) {
    // const savedToy = (toy._id) ? storageService.put(KEY, toy) : storageService.post(KEY, toy)
    // return savedToy;
    if (toy._id) {
        return axios.put(`http://localhost:3030/api/toy`, toy).then(res => res.data)
    } else {
        return axios.post(`http://localhost:3030/api/toy/`, toy).then(res => res.data)
    }
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


// function _createToys() {
//     var toys = JSON.parse(localStorage.getItem(KEY))
//     if (!toys || !toys.length) {
//         toys = [
//             _createToy('train', 145,'vehicle'),
//             _createToy('doll', 30, 'children'),
//             _createToy('ball', 90, 'sports'),
//             _createToy('teddy bear', 170, 'children'),
//             _createToy('kite', 50, 'sports'),
//             _createToy('rubber ducky', 100, 'children'),
//             _createToy('airplane', 150, 'vehicle')   
//         ]
//         localStorage.setItem(KEY, JSON.stringify(toys))
//     }
//     return toys;
// }

// function _createToy(name, price, type) {
//     return {
//         _id: utilService.makeId(),
//         name,
//         price,
//         type,
//         createdAt: new Date(),
//         inStock: true
//     }
// }



