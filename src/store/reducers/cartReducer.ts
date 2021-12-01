import {types} from "../types/cart";
import {IAction} from "../../interfaces/reduxActions";
import {IProductsData} from "./productsRaducer";

interface ICart {
    data: ICartProduct[];
}
interface ICartProduct {
    product: IProductsData,
    count: number
}

const initialState: ICart = {
    data: []
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
        case types.CHANGE_CART_PRODUCT_COUNT:
            return state
        default:
            return state
    }
}
