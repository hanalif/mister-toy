const fs = require('fs')

const gToys = require('../data/toys.json')

module.exports ={
    query,
    getById,
    remove,
    save
}


function query(filterBy = { type: 'all', name: '', fromPrice: 0, toPrice: null, type: 'all', isInStock: null }){
   
    let toysToSend = gToys;
    let searchStr = filterBy.name.toLowerCase();
    toysToSend = toysToSend.filter(t => {
       return (t.name.toLowerCase().includes(searchStr) &&
       t.price >= filterBy.fromPrice &&
       ( !filterBy.toPrice ||  t.price <= filterBy.toPrice ) &&
       (filterBy.type == 'all' || t.type === filterBy.type))&&
       (filterBy.isInStock === null || filterBy.isInStock === t.inStock )
    })

    return Promise.resolve(toysToSend);
}

function getById(toyId){
    const toy = gToys.find(t => t._id === toyId)
    return Promise.resolve(toy)
}

function remove(toyId){
    const idx = gToys.findIndex(toy => toy._id === toyId);
    if(idx >= 0){
        gToys.splice(idx, 1)
        return _saveToysToFile()
    }
    return Promise.reject('not your toy')
}

function save(toyToSave){
    const toy = {
        _id: toyToSave._id || _makeId(),
        name: toyToSave.name,
        price: toyToSave.price,
        type: toyToSave.type,
        inStock: toyToSave.inStock,
        createdAt: toyToSave.createdAt || new Date() 
    }
    if(toyToSave._id){
        const idx = gToys.findIndex(toy => toy._id === toyToSave._id)
        gToys[idx] = toy
    } else {
        gToys.unshift(toy)
    }
    return _saveToysToFile().then(()=>{
        return toy;
    })
}


function _makeId(length=5) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for(let i=0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _saveToysToFile(){
    return new Promise((resolve, reject)=>{
        fs.writeFile('data/toys.json', JSON.stringify(gToys, null, 2), (err)=>{
            if(err) return reject (err)
            resolve();
        })
    })
}



