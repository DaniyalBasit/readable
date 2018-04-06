import { GET_CATEGORIES } from "../actions/actionTypes";

const categories = (state = {categories: []}, action) => {
    const {categories} = action

    switch(action.type){
        case GET_CATEGORIES:
            return {
                state,
                ...categories
            }
        default:
            return state
    }

}

export default categories;