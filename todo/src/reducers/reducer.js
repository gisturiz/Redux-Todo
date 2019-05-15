import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/index';

const initialState = {
    todo: [
        {
        value: "",
        completed: false,
        id:''
    }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todo: [
                ...state.todo,
             { value: action.payload, completed: false, id: Date.now() }

            ]
        };
        case DELETE_TODO:
        return {
            ...state,
            todo: state.todo.filter(event =>
                !event.completed)
        };
        case TOGGLE_TODO:
        return {
            ...state,
            todo: state.todo.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo, 
                        completed: !todo.completed
                    };
                }
                return todo
            })

        }
        default:
        return state;
    }
}

export default reducer;