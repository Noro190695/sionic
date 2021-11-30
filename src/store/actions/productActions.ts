import { Dispatch } from 'redux';
import { get } from '../../api/fetching'
import { types } from '../types/products';

const enableLoading = (dispatch: Dispatch) => {
    dispatch({
        type: types.ENABLE_LOADING,
        payload: true
    })
}
const disableLoading = (dispatch: Dispatch) => {
    dispatch({
        type: types.DISABLE_LOADING,
        payload: false
    })
}
export const changeCount = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: types.CHANGE_COUNT,
            payload: false
        })
    }
}

export const getProducts = (to: number, count: number) => {
    
    return async (dispatch: Dispatch) => {
        enableLoading(dispatch)
        try{
            
            const fetchData: any = await get(`https://test2.sionic.ru/api/Products?range=[${to},${count}]`);
            const products: any = fetchData.map(async (product: any, i: number) => {
                const productImages = await get(`https://test2.sionic.ru/api/ProductImages/?filter={"product_id":${product.id}}`);
                const productVariant = await get(`https://test2.sionic.ru/api/ProductVariations/1?filter={"product_id":${product.id}}`);
                product.images = await productImages;
                product.variant = await productVariant;
                return product;
            })
            Promise.all(products).then(res => {
                dispatch({
                    type: types.GET_PRODUCTS,
                    payload: res
                })
                disableLoading(dispatch)
            })
        }catch(e) {
            console.log(e);            
        }
        
    }
}

