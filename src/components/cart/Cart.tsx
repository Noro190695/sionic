import React, { useEffect, useState } from 'react';
import Button from '../buttons/Button';
import DeleteIcon from '../svg/Delete';
import cartStyle from './cart.module.scss';
import {useDispatch} from "react-redux";
import {changeCartProductsCount, clearCartProduct, deleteCartProduct} from "../../store/actions/cartAction";
import {ICartProduct} from "../../store/reducers/cartReducer";

interface IProps {
    data: ICartProduct[]
}

const Cart: React.FC<IProps> = ({data} : IProps) => {
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);
    const clearCart = () => {
        dispatch(clearCartProduct())
    }
    const getSumCartProducts = (data: any) => {
        let sum = data.reduce((acc: number, item: any) => {
            acc += item.count
            return acc
        }, 0);
        return sum
    }
    const deleteProduct = (id: number) => {
        dispatch(deleteCartProduct(id))

    }
    const incrimentProduct = (id: number) => {
        console.log(id);  
    }
    const decrimentProduct = (id: number) => {
        console.log(id);
    }
    const changeQuantity = (id: number, value: number) => {

    }
    useEffect(() => {
        let p = data.reduce((price: number, data: any) => price += data.product.variant.price,0);
        dispatch(changeCartProductsCount(getSumCartProducts(data)))
        setPrice(p)

    }, [data])
    if (!!data.length) {
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
                        data.map((prod: any, i: number) => {
                            return (
                                <div className={cartStyle.cart__item}>
                                    <img src={'https://test2.sionic.ru/'+prod.product.images[0].image_url} alt="" />
                                    <p className={cartStyle.cart__item_title}>{prod.product.name}</p>
                                    <div className={cartStyle.cart__item_quantity}>
                                        <span onClick={() => decrimentProduct(prod.product.id)}>-</span>
                                        <input type="number"  defaultValue={prod.count} onChange={(e: any) => changeQuantity(prod.product.id, + e.target.value)}/>
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