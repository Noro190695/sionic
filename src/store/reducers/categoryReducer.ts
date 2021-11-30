import { types } from '../types/category';
import { IAction } from './../../interfaces/reduxActions';
interface ICategory {
    data: Array<ICategoryData>
}
export interface ICategoryData {
    id?: number,
    name?: string
}

const initialState: ICategory = {
    data: [
        {}
    ]
}

export const categoryReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.GET_CATEGORY:
            return {...state, data: action.payload}    
        default:
            return state
    }
}