import { GET_CATEGORIES } from "../actions/actionTypes";

const initialstate = {
    categories: []
}

const categories = (state = {initialstate}, action) => {
    const {categories} = action

    switch(action.type){
        case GET_CATEGORIES:
            return {
                ...categories
            }
        default:
            return state
    }

}

export default categories;