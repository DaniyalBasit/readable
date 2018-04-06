import {GET_CATEGORIES} from "./actionTypes"
import { getAllCategories } from "../utils/BackendAPI"

export const getCategories = () => {
    return dispatch => {getAllCategories()
        .then((categories) =>  {
            console.log(categories)
            dispatch(setCategories(categories))
        })
    }
}
export const setCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export default getCategories