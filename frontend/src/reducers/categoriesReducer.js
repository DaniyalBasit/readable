import { GET_CATEGORIES } from "../actions/actionTypes";

const categories = (state = {}, action) => {
    const {categories} = action

    switch(action.type){
        case GET_CATEGORIES:
        console.log(...categories)
            return {
                ...categories
            }
        default:
            return state
    }

}

export default categories;