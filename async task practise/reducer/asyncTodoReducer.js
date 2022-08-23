const initialState = {
    todos:[]
}

const asyncTodoReducer = (state  = initialState,action) => {

            switch (action.type) {
                case 'todo/add':
                    
                    return {
                        ...state,
                        todos:[...state.todos,action.payload]
                    }

                    case 'todo/added':
                        return {
                            ...state,
                            todos:[...state.todos,...action.payload]
                        }

                default:
                    return state
            }

}

module.exports = {
    asyncTodoReducer
}