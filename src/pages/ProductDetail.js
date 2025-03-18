import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductDetailContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductTitle = styled.h1`
  margin: 1rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const ProductDescription = styled.p`
  line-height: 1.6;
`;

const BidSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BidInput = styled.input`
  padding: 0.5rem;
  margin-right: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BidButton = styled.button`
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [bidAmount, setBidAmount] = useState('');

  useEffect(() => {
    // TODO: Fetch product details from API
    const mockProduct = {
      id: id,
      name: `Product ${id}`,
      price: 100 * id,
      image: 'https://via.placeholder.com/600',
      description: `This is a detailed description of Product ${id}.`,
    };
    setProduct(mockProduct);
  }, [id]);

  const handleBid = () => {
    // TODO: Handle bid submission
    alert(`Bid of $${bidAmount} placed for ${product.name}`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <ProductDetailContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
      <BidSection>
        <h3>Place a Bid</h3>
        <BidInput
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder="Enter your bid amount"
        />
        <BidButton onClick={handleBid}>Place Bid</BidButton>
      </BidSection>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
