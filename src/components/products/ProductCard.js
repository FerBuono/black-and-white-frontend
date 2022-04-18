import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

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

export const ProductCard = ({product: {name, price, id, url}}) => {

    const dispatch = useDispatch();

    const {products} = useSelector(state => state.cart);

    const handleAddProduct = () => {

    };

    return (
    <Card>
        <Img src={url} alt={name}/>
        <Title>{name}</Title>
        <Price>${price}</Price>
        <Buttons>
            <Add onClick={handleAddProduct}>+</Add>
            <Remove>-</Remove>
        </Buttons>
    </Card>
    )
}
