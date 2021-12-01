import {Dispatch} from "redux";
import { types } from "../types/cart";
import {IProductsData} from "../reducers/productsRaducer";


export const addToCart = (data: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.ADD_TO_CART,
            payload: data
        })
    }
}
export const changeCartProductCount = (data: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.CHANGE_CART_PRODUCT_COUNT,
            payload: data
        })
    }
}