import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Auction Site. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
