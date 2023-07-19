import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.div`
    background: #8133C0;
    background: linear-gradient(to right, #8133C0 0%, #564CFF 50%, #0B39C5 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-bottom: 5px;
`;

const Logo = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin: 0 40px;
    color: whitesmoke;
`;

const Login = styled.button`
    font-size: 16px;
    margin: 0 40px;
    padding: 8px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: lightgrey;
    }
`;

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <Logo>Space Shop</Logo>
                <Login>LOGIN</Login>
            </HeaderContainer>
        )
    }
};

export default Header;