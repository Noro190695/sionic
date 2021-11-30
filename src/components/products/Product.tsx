import React from 'react';
import { IProductsData } from '../../store/reducers/productsRaducer';
import Button from '../buttons/Button';
import productStyle from './products.module.scss';
interface IProps {
    data: IProductsData[]
}
const Product: React.FC<IProps> = ({data}) => {

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
                            />
                        </div>
                    )
                }): null
            }
        </div>
    )
}


export default Product;