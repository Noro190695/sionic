import React, {FC, useEffect} from 'react';
import Button from '../buttons/Button';
import productStyle from './products.module.scss';
import { useAppSelector} from '../hooks/reduxHooks';
import { getCategories } from '../../store/actions/categoryActions';
import { useDispatch } from 'react-redux';
import { changeCount, getProducts } from '../../store/actions/productActions';
import { ICategoryData } from '../../store/reducers/categoryReducer';
import Product from './Product';
import Loading from '../loading/Loading';
const Products: FC = () => {
    const categories = useAppSelector(state => state.category.data);
    const products = useAppSelector(state => state.products);
    const dispatch = useDispatch();

    const colors = ['#2967FF', '#58CF18', '#FFA601', '#FF7CB4'];
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts(products.to,products.count))
    }, [])
    const showMore = () => {
        dispatch(changeCount())
        dispatch(getProducts(products.to,products.count))
    }
    const sortProductByCategory = (id: number) => {
        console.log(id);
    }
    
    return (
        <div className={productStyle.products}>
            {
                products.loading?<Loading type='spinningBubbles' color='#2967FF'  />:
                <>
                <div className={productStyle.products__title}>
                <h2>Категории товаров</h2>
                </div>
                <nav className={productStyle.products__links}> 
                    <ul>
                        {
                            !!categories.length?categories.map((item: ICategoryData, i:number) => {
                                return (
                                    <li key={i}>
                                        <Button 
                                            variant={colors[Math.round(Math.random() * 3)]} 
                                            content={item.name!}
                                            px={10} py={5} 
                                            borderRadius={20} 
                                            onClick={() => {
                                                sortProductByCategory(item.id!)
                                            }}
                                        />
                                    </li>
                                )
                            }): null
                        }
                    </ul>
                </nav>
                <Product data={products.data}/>
                <div className={productStyle.show__more}>
                <Button 
                    variant={'#F0F4FB'} 
                    color='#727280'
                    fontSize={16}
                    content={'Показать больше товаров'}
                    px={44} py={15} 
                    borderRadius={50} 
                    onClick={showMore}
                />                            
                </div>
                </>
            }
            
        </div>
    );
};

export default Products;