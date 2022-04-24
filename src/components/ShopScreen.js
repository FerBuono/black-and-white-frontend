import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { cartStartCreatNew } from '../actions/cart';
import { toogleAdminPanel, toogleCartPanel } from '../actions/ui';
import { amountInCart } from '../helpers/cartHelpers';
import { AdminPanel } from './admin/AdminPanel';
import { CartPanel } from './cart/CartPanel';
import { ProductsContainer } from './products/ProductsContainer';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow-y: hidden;

    @media (min-width: 768px) {
        max-width: 800px;
        overflow: hidden;
    }
`;

const NavBar = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Logo = styled.h1`
    cursor: pointer;
    user-select: none;
`;


const Counter = styled.p`
    position: absolute;
    right: 2rem;
    user-select: none;
    cursor: pointer;
`;

const Admin = styled.p`
    position: absolute;
    left: 2rem;
    cursor: pointer;
`;

const Body = styled.div`
    height: calc(100vh - 6rem);
`;


export const ShopScreen = () => {

    const dispatch = useDispatch();

    const {adminPanel, cartPanel} = useSelector(state => state.ui);
    const {products} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(cartStartCreatNew());
    }, [])    

    return (
    <Container>
        <NavBar>
            <Logo>black & white</Logo>
            <Counter cartPanel={cartPanel} onClick={() => dispatch(toogleCartPanel())}>{amountInCart(products)}</Counter>
            <Admin adminPanel={adminPanel} onClick={() => dispatch(toogleAdminPanel())}>admin</Admin>
            <AdminPanel />
            <CartPanel />
        </NavBar>
        <Body>
            <ProductsContainer />
        </Body>
    </Container>
    )
}
