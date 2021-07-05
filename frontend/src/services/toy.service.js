
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


function query(filterBy) {
    return axios.get('http://localhost:3030/api/toy', { params: filterBy }).then(res => res.data);
}

function getById(id) {
    return axios.get(`http://localhost:3030/api/toy/${id}`).then(res => res.data)
}

function remove(id) {
    return axios.delete(`http://localhost:3030/api/toy/${id}`).then(res => res.data)
}

function save(toy) {
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





