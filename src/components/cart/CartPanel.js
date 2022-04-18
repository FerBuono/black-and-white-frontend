import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toogleCartPanel } from '../../actions/ui';

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
`;

const Products = styled.div`
    height: 100%;
    padding: 2rem;
`;

const Title = styled.h3`
    display: inline-block;
`;

const FormGroup = styled.div`
    margin-left: 2rem;
    display: flex;
    width: calc(100%-2rem);
    justify-content: space-between;
    margin-top: 10px;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    margin-left: 1rem;
    border-bottom: 1px solid lightgray;

    &:focus {
        outline: none;
    }
`;

const Submit = styled.input`
    width: calc(100%-2rem);
    margin-left: 1rem;
`;

const Form = styled.form`
    margin-top: 2rem;
`;


export const CartPanel = () => {

    const dispatch = useDispatch();

    const {cartPanel} = useSelector(state => state.ui);
    
    useEffect(() => {
        
    }, [])

    return (
    <Container cartPanel={cartPanel}>
        <CloseBtn onClick={() => dispatch(toogleCartPanel())}>x</CloseBtn>
        <Products>
            <h2>cart(0)</h2>

        </Products>
        {/* <Forms>
            <Form onSubmit={handleSubmitAdd}>
                <Title>add product</Title>
                <Submit type="submit" value="add"/>
                <FormGroup>
                    <label>name: </label>
                    <Input type="text" name="name" required/>
                </FormGroup>
                <FormGroup>
                    <label>desc: </label>
                    <Input type="text" name="desc" required/>
                </FormGroup>
                <FormGroup>
                    <label>code: </label>
                    <Input type="text" name="code" required/>
                </FormGroup>
                <FormGroup>
                    <label>stock: </label>
                    <Input type="text" name="stock" required/>
                </FormGroup>
                <FormGroup>
                    <label>price: </label>
                    <Input type="text" name="price" required/>
                </FormGroup>
                <FormGroup>
                    <label>img: </label>
                    <Input type="text" name="url" required/>
                </FormGroup>
            </Form>
            <Form onSubmit={handleSubmitUpdate}>
                <Title>update product</Title>
                <Submit type="submit" value="update"/>
                <FormGroup>
                    <label>id: </label>
                    <Input type="text" name="id" required/>
                </FormGroup>
                <FormGroup>
                    <label>name: </label>
                    <Input type="text" name="name"/>
                </FormGroup>
                <FormGroup>
                    <label>desc: </label>
                    <Input type="text" name="desc"/>
                </FormGroup>
                <FormGroup>
                    <label>code: </label>
                    <Input type="text" name="code"/>
                </FormGroup>
                <FormGroup>
                    <label>stock: </label>
                    <Input type="text" name="stock"/>
                </FormGroup>
                <FormGroup>
                    <label>price: </label>
                    <Input type="text" name="price"/>
                </FormGroup>
                <FormGroup>
                    <label>img: </label>
                    <Input type="text" name="url"/>
                </FormGroup>
            </Form>
            <Form onSubmit={handleSubmitDelete}>
                <Title>delete product</Title>
                <Submit type="submit" value="delete"/>
                <FormGroup>
                    <label>id: </label>
                    <Input type="text" name="id" required/>
                </FormGroup>
            </Form>
        </Forms> */}
    </Container>
    )
}
