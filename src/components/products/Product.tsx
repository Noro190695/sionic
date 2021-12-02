import React, {useEffect, useState} from 'react';
import { IProductsData } from '../../store/reducers/productsRaducer';
import Button from '../buttons/Button';
import productStyle from './products.module.scss';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/reduxHooks";
import {addToCart, changeCartProductsCount} from "../../store/actions/cartAction";
interface IProps {
    data: IProductsData[]
}
const Product: React.FC<IProps> = ({data}) => {
    const dispatch = useDispatch();
    const cart = useAppSelector(state => state.cart);
    const addToCartEvent = (product: IProductsData) => {
        dispatch(addToCart(product));
        if (!!cart.data.length){
            let cartItemCount = cart.data.reduce((acc: number, item: any) => {
                acc += item.count
                return acc
            }, 0);

            dispatch(changeCartProductsCount(cartItemCount))
        }
    }

    return (
        <div className={productStyle.product}>
            {
                !!data.length?data.map((item, i) => {
                    return (
                        <div key={i} className={productStyle.product__item}>
                            <img src={'https://test2.sionic.ru/' + item.images![0].image_url} alt="" />
                            <p className={productStyle.product__item_name}>{item.name}</p>
                            <p className={productStyle.product__item_price}>{ item.variant.price} &#8381;</p>
                            <Button 
                                content='Добавить в корзину' 
                                variant='#fff' 
                                border={1} 
                                borderColor='#2967FF'
                                borderRadius={40}
                                px={40} py={10}
                                cursor='pointer'
                                onClick={() => {
                                    addToCartEvent(item)
                                }}
                            />
                        </div>
                    )
                }): null
            }
        </div>
    )
}


export default Product;