import React, { useEffect, useState } from 'react';
import { IProductsData } from '../../store/reducers/productsRaducer';
import Button from '../buttons/Button';
import { useAppSelector } from '../hooks/reduxHooks';
import DeleteIcon from '../svg/Delete';
import cartStyle from './cart.module.scss';

const Cart: React.FC = () => {
    const cart = useAppSelector(state => state.cart.data)
    const [price, setPrice] = useState(0);
    const clearCart = () => {
        
    }
    const deleteProduct = (id: number) => {
        console.log(id);
        
    }
    const incrimentProduct = (id: number) => {
        cart.map((item: any) => {
            item.count++;
            
        })
        console.log(id);  
    }
    const decrimentProduct = (id: number) => {
        console.log(id);
    }
    const changeQuantity = (id: number, value: number) => {
        console.log(id);
        console.log(value);
    }
    useEffect(() => {
       let p = cart.reduce((price: number, data: any) => price += data.product.variant.price,0);
       setPrice(p)
    },[])
    if (!!cart.length) {
        return (
            <div className={cartStyle.cart}>
                <div className={cartStyle.cart__header}>
                    <p className={cartStyle.cart__title}>Корзина</p>
                    <p className={cartStyle.cart__clear} onClick={clearCart}>Очистить корзину</p>
                </div>
                <div className={cartStyle.cart__content}>
                    <div className={cartStyle.cart__content_header}>
                        <div>
                            <p>Стоимость корзины:</p>
                            <h3>{price} &#8381;</h3>
                        </div>
                        <Button 
                            content='Оформить'
                            px={64} py={16}
                            borderRadius={50}
                            variant='#2967FF'
                            color='#fff'
                        />
                    </div>
                    {
                        cart.map((prod: any, i: number) => {
                            return (
                                <div className={cartStyle.cart__item}>
                                    <img src={'https://test2.sionic.ru/'+prod.product.images[0].image_url} alt="" />
                                    <p className={cartStyle.cart__item_title}>{prod.product.name}</p>
                                    <div className={cartStyle.cart__item_quantity}>
                                        <span onClick={() => decrimentProduct(prod.product.id)}>-</span>
                                        <input type="number"  defaultValue={prod.count} onChange={(e: any) => changeQuantity(prod.product.id, +e.target.value)}/>
                                        <span onClick={() => incrimentProduct(prod.product.id)}>+</span>
                                    </div>
                                    <p className={cartStyle.cart__item_price}>{prod.product.variant.price} &#8381;</p>
                                    <span className={cartStyle.cart__item_delete} onClick={() => deleteProduct(prod.product.id)}>
                                        <DeleteIcon />
                                    </span>
                                </div>
                            )
                        })
                    }
    
                </div>
            </div>
        );
    }
    
    return (
        <div className={cartStyle.cart}>
            <h2>CART EMPTY</h2>
        </div>
    )
};

export default Cart;