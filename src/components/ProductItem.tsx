import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  bids: number;
  endTime: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Current Price: ${product.price}</p>
      <p>Bids: {product.bids}</p>
      <p>End Time: {new Date(product.endTime).toLocaleString()}</p>
      <button>Place Bid</button>
    </div>
  );
};

export default ProductItem;
