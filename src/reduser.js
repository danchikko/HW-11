import { ADD, COMPLETE, DELETE, Ok } from "./constans"


export const initialState = []

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD : 
        return [ action.todo, ...state]
        case COMPLETE :
            return state.map(el => {
                return el.id === action.id ? {...el, complete: !el.complete} : el
            })
            case DELETE : 
            return state.filter(el => el.id !== action.id)
            default : return state;
    }
}