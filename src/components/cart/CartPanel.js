import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { cartStartRemoveAll, cartStartAddNewProduct, cartStartRemoveProduct } from '../../actions/cart';
import { toogleCartPanel } from '../../actions/ui';
import { amountInCart, cartPrice } from '../../helpers/cartHelpers';

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

const Title = styled.h2`
    display: inline;
    margin-right: 1rem;
`;

const Products = styled.div`
    height: 100%;
    padding: 2rem;
    width: 100%;
`;

const ProductsTable = styled.table`
    margin-top: 2rem;
    width: 100%;
    table-layout: fixed;
    text-align: center;
    border-collapse: collapse;

    thead {
        border-bottom: 1px solid black;
    }

    tr {
        height: 50px;
    }

    img {
        height: 50px;
    }

    tfoot {
        border-top: 1px solid black;
    }
`;

const Buttons = styled.div`
    display: inline-flex;
    
`;

const Button = styled.button`
    margin: 0 5px;
    width: 20px;
`;

export const CartPanel = () => {

    const dispatch = useDispatch();

    const {cartPanel} = useSelector(state => state.ui);
    const {id: cartId, products} = useSelector(state => state.cart);
    
    return (
    <Container cartPanel={cartPanel}>
        <CloseBtn onClick={() => dispatch(toogleCartPanel())}>x</CloseBtn>
        <Products>
            <Title>
                cart({amountInCart(products)}): ${cartPrice(products)}
            </Title>
            {
                amountInCart(products) > 1 
                    &&
                    <button 
                        onClick={() => {
                            dispatch(cartStartRemoveAll(cartId));
                            dispatch(toogleCartPanel());
                        }}
                    >
                        remove all products
                    </button>
            }
            <ProductsTable>
                <thead>
                    <tr>
                        <th>product</th>
                        <th>name</th>
                        <th>price</th>
                        <th>amount</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td><img src={product.url} /></td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>
                                        <Buttons>
                                            <Button onClick={() => dispatch(cartStartAddNewProduct(cartId, product))}>+</Button>
                                            {product.amount}
                                            <Button onClick={() => dispatch(cartStartRemoveProduct(cartId, product.id, product.amount))}>-</Button>
                                        </Buttons>
                                    </td>
                                    <td>${product.price * product.amount}</td>
                                    <td>
                                        <button onClick={() => dispatch(cartStartRemoveProduct(cartId, product.id, 1))}>remove all</button>
                                    </td>
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
