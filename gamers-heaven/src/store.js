import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {productDetailsReducer, productListReducer} from './Components/reducers/productReducers'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

const initiaState = {}

const middleware = [thunk]

const store = createStore(reducer, initiaState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store