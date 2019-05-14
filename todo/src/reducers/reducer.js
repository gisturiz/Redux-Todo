import { ADD_TODO } from '../actions/index';

const initialState = {
    todo: [
        {
        value: "",
        completed: false
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
             { value: action.payload, completed: false }

            ]
        };
        default:
        return state;
    }
}

export default reducer;