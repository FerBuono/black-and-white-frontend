import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { productsStartLoading } from '../../actions/products';
import { ProductCard } from './ProductCard';

const Container = styled.div`
    height: 100%;
    padding: 2rem 0 0 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow-y: hidden;
`;

export const ProductsContainer = () => {

    const dispatch = useDispatch();

    const {products} = useSelector(state => state.products);
    
    useEffect(() => {
        dispatch(productsStartLoading());
    }, []);
    
    return (
    <Container>
        {
            products.map(product => {
                return <ProductCard product={product} key={product.id}/>
            })
        }
    </Container>
    )
}
