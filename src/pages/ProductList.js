import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductListContainer = styled.div`
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductTitle = styled.h3`
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #007bff;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Fetch products from API
    const mockProducts = [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: 'https://via.placeholder.com/300',
      },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <ProductListContainer>
      <h2>All Products</h2>
      <ProductGrid>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard>
              <ProductImage src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
            </ProductCard>
          </Link>
        ))}
      </ProductGrid>
    </ProductListContainer>
  );
};

export default ProductList;
