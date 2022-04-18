import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toogleAdminPanel, toogleCartPanel } from '../actions/ui';
import { AdminPanel } from './admin/AdminPanel';
import { CartPanel } from './cart/CartPanel';
import { ProductsContainer } from './products/ProductsContainer';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    transition: color 1s ease;
    overflow-y: hidden;
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
`;

const Admin = styled.p`
    position: absolute;
    left: 2rem;
`;

const Body = styled.div`
    height: calc(100vh - 6rem);
`;


export const ShopScreen = () => {

    const dispatch = useDispatch();

    const {adminPanel, cartPanel} = useSelector(state => state.ui);

    

    return (
    <Container>
        <NavBar>
            <Logo>black & white</Logo>
            <Counter cartPanel={cartPanel} onClick={() => dispatch(toogleCartPanel())}>0</Counter>
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
