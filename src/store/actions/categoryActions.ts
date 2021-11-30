
import { Dispatch } from 'redux';
import { get } from '../../api/fetching'
import { ICategoryData } from '../reducers/categoryReducer';
import { types } from '../types/category';

export const getCategories = () => {
    return async (dispatch: Dispatch) => {
        try{
            const fetchData: any = await get('https://test2.sionic.ru/api/Categories');
            dispatch({
                type: types.GET_CATEGORY,
                payload: fetchData
            })
        }catch(e) {
            console.log(e);            
        }
        
    }
}