import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { adminCheck } from '../actions/admin';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.section ? 'white' : 'black'};
    transition: color .5s ease;
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
    color: ${(props) => !props.section ? 'white' : 'black'};
    transition: color .5s ease;
    cursor: pointer;
    user-select: none;
`;

const Sections = styled.div`
    display: flex;
    margin-top: 1em;
`;

const Black = styled.p`
    margin-left: 5px;
    color: ${(props) => !props.section ? 'white' : 'black'};
    text-decoration: ${(props) => !props.section && 'underline'};
    transition: color .5s ease;
    cursor: pointer;
    user-select: none;
`;

const Bar = styled.p`
    color: ${(props) => !props.section ? 'white' : 'black'};
    transition: color .5s ease;
    user-select: none;
`;

const White = styled.p`
    margin-right: 5px;
    color: ${(props) => !props.section ? 'white' : 'black'};
    text-decoration: ${(props) => props.section && 'underline'};
    transition: color .5s ease;
    cursor: pointer;
    user-select: none;
`;

const Counter = styled.p`
    color: ${(props) => !props.section ? 'white' : 'black'};
    position: absolute;
    right: 2rem;
    transition: color .5s ease;
    user-select: none;
`;

const Admin = styled.p`
    color: ${(props) => !props.section ? 'white' : 'black'};
    position: absolute;
    left: 2rem;
    text-decoration: ${(props) => !props.isAdmin && 'line-through'};
`;

const Body = styled.div`
    height: calc(100vh - 6rem);
    padding: 2rem;
`;

const ProductsContainer = styled.div`
    height: 100%;
`

export const ShopScreen = () => {

    const {isAdmin} = useSelector(state => state.admin);
    const [section, setSection] = useState(true);
    const dispatch = useDispatch();
    
    return (
    <Container section={section}>
        <NavBar>
            <Logo section={section}>black & white</Logo>
            <Sections>
                <White section={section} onClick={() => setSection(true)}>white</White>
                <Bar section={section}> / </Bar>
                <Black section={section} onClick={() => setSection(false)}>black</Black>
            </Sections>
            <Counter section={section}>0</Counter>
            <Admin section={section} isAdmin={isAdmin} onClick={() => dispatch(adminCheck())}>admin</Admin>
        </NavBar>
        <Body>
            <ProductsContainer>

            </ProductsContainer>
        </Body>
    </Container>
    )
}
