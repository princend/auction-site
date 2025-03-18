import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  background: #007bff;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.1rem;
  &:hover {
    background: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Auction Site</Title>
      <Description>
        Discover amazing products and bid for the best deals!
      </Description>
      <CTAButton to="/products">Browse Products</CTAButton>
    </HomeContainer>
  );
};

export default Home;
