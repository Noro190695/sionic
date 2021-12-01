import { types } from '../types/products';
import { IAction } from './../../interfaces/reduxActions';
interface IProducts {
    loading: boolean,
    to: number;
    count: number;
    data: Array<IProductsData>
}
export interface IProductsData {
    id?: number;
    name?: string;
    category_id?: number;
    description?: string;
    images?: IProductImages[];
    variant: IProductVariant
}
interface IProductImages {
    id?: number;
    image_name?: string;
    image_url?: string;
    product_id?: number;
}
interface IProductVariant {
    id?: number;
    price?: number;
    stock?: number;
    product_id?: number;
}

const initialState: IProducts = {
    loading: false,
    to: 0,
    count: 15,
    data: [
      
    ]
}

export const productReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {...state, data: [...state.data, ...action.payload]} 
        case types.ENABLE_LOADING:
            return {...state, loading: true}    
        case types.DISABLE_LOADING:
            return {...state, loading: false}    
        case types.CHANGE_COUNT:
            return {...state, to: state.count, count: state.count + 15}    
        default:
            return state
    }
}