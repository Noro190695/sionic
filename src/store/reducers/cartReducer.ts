import {types} from "../types/cart";
import {IAction} from "../../interfaces/reduxActions";
import {IProductsData} from "./productsRaducer";

interface ICart {
    data: ICartProduct[];
    count: number
}
export interface ICartProduct {
    product: IProductsData,
    count: number
}

const initialState: ICart = {
    data: [],
    count: 0
}
const addToCartFilter = (data: any, payload: IProductsData ) => {
    let readyData: any = data;
    if (!!data.length){
        let prod = data.every((item: any, i: number) => {
            if(item.product.id === payload.id){
                readyData[i].count++
            }else{
                return payload
            }
        });
        if (prod) readyData.push({product: payload, count: 1})
    }else{
        readyData.push({product: payload, count: 1})
    }
    return readyData;
}

export const cartReducer = (state = initialState, action: IAction ) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {...state, data:  addToCartFilter(state.data, action.payload)}
        case types.CHANGE_CART_PRODUCTS_COUNT:
            return {...state, count: action.payload}
        case types.DELETE_CART_PRODUCT:
            return {...state, data: state.data.filter(item => item.product.id != action.payload)}
        case types.CLEAR_CART_PRODUCTS:
            return {...state, data: action.payload}
        default:
            return state
    }
}
