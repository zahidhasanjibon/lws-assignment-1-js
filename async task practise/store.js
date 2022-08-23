const  {createStore,applyMiddleware} = require('redux')
const {asyncTodoReducer} = require('./reducer/asyncTodoReducer')
const {fetchMiddleware} = require('./fetchMiddleware')

const store = createStore(asyncTodoReducer,applyMiddleware(fetchMiddleware))



    store.subscribe(() => {
        console.log(store.getState())
    })

    // store.dispatch({
    //     type:'todo/add',
    //     payload:'learn redux'
    // })
    store.dispatch({
        type:'todo/fetch',
    })