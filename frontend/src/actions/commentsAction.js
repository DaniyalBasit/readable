import { 
    START_LOADING_COMMENTS,
    SUCCESS_LOADING_COMMENTS,
    ERROR_LOADING_COMMENTS
} from "../actions/actionTypes";
import { getAllComments } from "../utils/BackendAPI"

export const getComments = () => {
    return dispatch => {
        
    }
}

export const startLoading = () => ({
    type: START_LOADING_COMMENTS,
})

export const successLoading = (comments) => ({
    type: SUCCESS_LOADING_COMMENTS,
    comments
})

export const errorLoading = () => ({
    type: ERROR_LOADING_COMMENTS,
})

export default getCategories