import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { cartStartAddNewProduct } from '../../actions/cart';
import { productsSetActive } from '../../actions/products';
import { toogleAdminPanel } from '../../actions/ui';

const Card = styled.div`
    width: 15rem;
    height: 45%;
    margin: 0 1rem 1rem 0;
    padding: 1rem;
    position: relative;
    text-align: center;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`;

const Img = styled.img`
    width: 100%;
    height: 70%;
    object-fit: contain;
`;

const Title = styled.p``;

const Price = styled.p`
    width: 100%;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: .5rem;
`;

const Add = styled.button`
    padding: 0 4px;
`;

const Remove = styled.button`
    padding: 0 4px;
`;

const UpdateBtn = styled.button`
    position: absolute;
    left: 0;
    top: 0;
`

const RemoveBtn = styled.button`
    position: absolute;
    right: 0;
    top: 0;
`

export const ProductCard = ({product}) => {

    const dispatch = useDispatch();

    const {id} = useSelector(state => state.cart);

    const handleAddProduct = () => {
        product.amount = 1
        dispatch(cartStartAddNewProduct(id, product))
    };

    const handleActiveProduct = (action) => {
        dispatch(productsSetActive(product, action));
        dispatch(toogleAdminPanel());
    };

    return (
    <Card>
        <UpdateBtn onClick={() => handleActiveProduct('update')}>update</UpdateBtn>
        <RemoveBtn onClick={() => handleActiveProduct('remove')}>remove</RemoveBtn>
        <Img src={product.url} alt={product.name}/>
        <Title>{product.name}</Title>
        <Price>${product.price}</Price>
        <Buttons>
            <Add onClick={handleAddProduct}>+</Add>
            <Remove>-</Remove>
        </Buttons>
    </Card>
    )
}
