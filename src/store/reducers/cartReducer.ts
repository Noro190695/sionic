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

export const cartReducer = (state = initialState, action: IAction ) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {...state, data:  [...state.data, action.payload]}
        case types.CHANGE_CART_PRODUCT_COUNT:
            return {...state, data:   state.data.filter(item => {
                    if (item.product.id === action.payload.id){
                        item.count++
                    }
                    return item
                })}
        default:
            return state
    }
}
