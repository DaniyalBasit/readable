import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducer from '../reducers/combinedReducer';
import thunk from 'redux-thunk';

const store = createStore(
    combinedReducer,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;