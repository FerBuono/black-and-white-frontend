import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { productsStartAddNew, productsStartDelete, productsStartUpdate } from '../../actions/products';
import { toogleAdminPanel } from '../../actions/ui';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: ${(props) => props.adminPanel === true ? '0' : '-100vw'};
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

const Forms = styled.div`
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


export const AdminPanel = () => {

    const dispatch = useDispatch();

    const {adminPanel} = useSelector(state => state.ui);

    const handleSubmitAdd = (e) => {
        e.preventDefault();

        const {name, desc, code, stock, price, url} = e.target;
        const product = {
            name: name.value,
            desc: desc.value,
            code: code.value,
            stock: stock.value,
            price: price.value,
            url: url.value,
        };

        dispatch(productsStartAddNew(product));
        e.target.reset();
    };

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        
        const {id, name, desc, code, stock, price, url} = e.target;
        const product = {
            name: name.value,
            desc: desc.value,
            code: code.value,
            stock: stock.value,
            price: price.value,
            url: url.value,
        };

        const newProduct = {};

        for(const key in product) {
            if(product[key] !== '') {
                newProduct[key] = product[key];
            };
        };

        dispatch(productsStartUpdate(id.value, newProduct));
        e.target.reset();
    };

    const handleSubmitDelete = (e) => {
        e.preventDefault();

        const {id} = e.target;

        dispatch(productsStartDelete(id.value));
        e.target.reset();
    };

    return (
    <Container adminPanel={adminPanel}>
        <CloseBtn onClick={() => dispatch(toogleAdminPanel())}>x</CloseBtn>
        <Forms>
            <h2>admin panel</h2>
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
        </Forms>
    </Container>
    )
}
