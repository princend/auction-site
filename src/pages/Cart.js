import React, { useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`;

const ItemDetails = styled.div`
  h3 {
    margin: 0;
  }
`;

const ItemPrice = styled.p`
  font-weight: bold;
  color: #007bff;
`;

const RemoveButton = styled.button`
  background: #dc3545;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #c82333;
  }
`;

const Total = styled.div`
  text-align: right;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  background: #28a745;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1rem;
  width: 100%;
  &:hover {
    background: #218838;
  }
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'https://via.placeholder.com/300',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://via.placeholder.com/300',
      quantity: 2,
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <ItemInfo>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
            </ItemDetails>
          </ItemInfo>
          <ItemPrice>${item.price * item.quantity}</ItemPrice>
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            Remove
          </RemoveButton>
        </CartItem>
      ))}
      <Total>Total: ${total}</Total>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </CartContainer>
  );
};

export default Cart;
