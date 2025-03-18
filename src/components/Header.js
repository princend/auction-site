import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;
    &:hover {
      color: #f0f0f0;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">Auction Site</Link>
      </Logo>
      <Nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
