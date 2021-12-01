import { categoryReducer } from './categoryReducer';
import { combineReducers } from 'redux';
import { productReducer } from './productsRaducer';
import {cartReducer} from "./cartReducer";


const rootReducer = combineReducers({
    category: categoryReducer,
    products: productReducer,
    cart: cartReducer
});

export default rootReducer;