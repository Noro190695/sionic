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
export const changeCartProductsCount = (count: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.CHANGE_CART_PRODUCTS_COUNT,
            payload: count
        })
    }
}
export const incrimentCartProductCount = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.INCRIMENT_CART_PRODUCT_COUNT,
            payload: id
        })
    }
}
export const decrimentCartProductCount = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.DECRIMENT_CART_PRODUCT_COUNT,
            payload: id
        })
    }
}
export const deleteCartProduct = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.DELETE_CART_PRODUCT,
            payload: id
        })
    }
}
export const clearCartProduct = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.CLEAR_CART_PRODUCTS,
            payload: []
        })
    }

}