import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk"
import { getProductsReducer } from './reducer/product-reducer';
const reducer = combineReducers({
   getProducts:getProductsReducer
})

const middleware=[thunk]

const store=createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)
export default store;