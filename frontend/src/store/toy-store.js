import { toyService } from "../services/toy.service.js"
import { utilService } from "../services/util.service.js"

const PAGE_SIZE = 6


export const toyStore = {
    state: {
        toys: [],
        filterBy: { type: 'all', name: '', fromPrice: 0, toPrice: null, type: 'all', isInStock: null },
        pageIndx: 0,
    },
    getters: {
        toysToShow(state) {
            let toysToShow = state.toys;
            let searchStr = state.filterBy.name.toLowerCase();
            toysToShow = toysToShow.filter(t => {
               return (t.name.toLowerCase().includes(searchStr) &&
               t.price >= state.filterBy.fromPrice &&
               ( !state.filterBy.toPrice ||  t.price <= state.filterBy.toPrice ) &&
               (state.filterBy.type == 'all' || t.type === state.filterBy.type))&&
               (state.filterBy.isInStock === null || state.filterBy.isInStock === t.inStock )
            })
            
            return toysToShow;
        },
    },
    mutations: {
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            state.toys.splice(idx, 1)
        },
        addToy(state, { toy }) {
            state.toys.unshift(toy)
        },
        updateToy(state, { toy }) {
            const idx = state.toys.findIndex(t => t._id === toy._id)
            state.toys.splice(idx, 1, toy)
        },
        setToys(state, { toys }) {
            state.toys = toys
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        nextPage(state) {
            state.pageIndx++;
            if (state.pageIndx * PAGE_SIZE >= state.todos.length) {
                state.pageIndx = 0;
            }
        },
        prevPage(state) {
            state.pageIndx--;
            if (state.pageIndx < 0) {
                let maxPage = state.todos.length / PAGE_SIZE
                state.pageIndx = Number.isInteger(maxPage) ? --maxPage : Math.floor(maxPage)
            }
        }
    },
    actions: {
        loadToys(context) {
            return toyService.query()
                .then(toys => {
                    context.commit({ type: 'setToys', toys })
                    return toys;
                })
                .catch(err => {
                    console.log('Cannot load toys', err);
                    throw err;
                })
        },
        removeToy({ commit }, payload) {
            return toyService.remove(payload.toyId)
                .then(() => {
                    commit(payload)
                })
                .catch(err => {
                    console.log('Cannot remove toy:', payload.toyId, err);
                    throw err;
                })
        },
        saveToy({ commit }, payload) {
            const type = (payload.toy._id) ? 'updateToy' : 'addToy';
            return toyService.save(payload.toy)
                .then((savedToy) => {
                    commit({ type, toy: savedToy })
                    return savedToy;
                })
                .catch(err => {
                    console.log('Cannot save toy:', payload.toy, err);
                    throw err;
                })
        },
        getToyById(context, payload) {
            return toyService.getById(payload.toyId)
                .then(toy => {
                    return toy;
                })
                .catch(err => {
                    console.log('Cannot load toy', err);
                    throw err;
                })
        }

    }

}