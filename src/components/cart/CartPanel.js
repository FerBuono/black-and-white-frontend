import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toogleCartPanel } from '../../actions/ui';
import { amountInCart } from '../../helpers/amountInCart';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: ${(props) => props.cartPanel === true ? '0' : '100vw'};
    height: 100vh;
    width: 100%;
    background-color: white;
    z-index: 10;
    transition: left .3s ease;
`;

const CloseBtn = styled.p`
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 20px;
    cursor: pointer;
`;

const Products = styled.div`
    height: 100%;
    padding: 2rem;
    width: 100%;
`;

const ProductsTable = styled.table`
    margin-top: 2rem;
    width: 100%;

    th {
        text-align: left;
    }

    tr {
        height: 50px;
    }

    img {
        height: 50px;
    }
`;

export const CartPanel = () => {

    const dispatch = useDispatch();

    const {cartPanel} = useSelector(state => state.ui);
    const {products} = useSelector(state => state.cart);
    
    return (
    <Container cartPanel={cartPanel}>
        <CloseBtn onClick={() => dispatch(toogleCartPanel())}>x</CloseBtn>
        <Products>
            <h2>cart({amountInCart(products)})</h2>
            <ProductsTable>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return (
                                <tr>
                                    <td><img src={product.url} /></td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.amount}</td>
                                    <td>{product.price * product.amount}</td>
                                    <td>x</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </ProductsTable>
        </Products>
        
    </Container>
    )
}
