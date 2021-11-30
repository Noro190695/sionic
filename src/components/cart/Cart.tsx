import React from 'react';
import cartStyle from './cart.module.scss';

const Cart: React.FC = () => {
    return (
        <div className={cartStyle.cart}>
            <h1>CART PAGE</h1>
        </div>
    );
};

export default Cart;