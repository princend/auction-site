import React from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  bids: number;
  endTime: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Vintage Camera',
    price: 120,
    image: 'https://picsum.photos/200/300',
    bids: 15,
    endTime: '2025-03-20T14:00:00'
  },
  {
    id: 2,
    name: 'Antique Watch',
    price: 250,
    image: 'https://picsum.photos/200/300',
    bids: 8,
    endTime: '2025-03-19T18:00:00'
  },
  {
    id: 3,
    name: 'Rare Book Collection',
    price: 180,
    image: 'https://picsum.photos/200/300',
    bids: 12,
    endTime: '2025-03-21T10:00:00'
  }
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
