const fetch = require('node-fetch')

const fetchMiddleware = (store) => (next) => async(action) =>{

        console.log(store.getState());
    // console.log('delaying');
    // if(action.type === 'todo/add') {
    //     setTimeout(() => {
    //             store.dispatch({
    //                 type:'todo/added',
    //                 payload:['js','node']
    //             })
    //             next(action)
    //     },3000)
    //     return 
    // }

            if(action.type === 'todo/fetch'){
               const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                const data = await res.json()

                store.dispatch({
                    type:'todo/added',
                    payload:data
                })
                return

            }



    return next(action)

} 

module.exports = {
    fetchMiddleware
}