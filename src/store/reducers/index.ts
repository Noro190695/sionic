import { categoryReducer } from './categoryReducer';
import { combineReducers } from 'redux';
import { productReducer } from './productsRaducer';


const rootReducer = combineReducers({
    category: categoryReducer,
    products: productReducer
});

export default rootReducer;