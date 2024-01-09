import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import closeIcon from '../../../images/closeIcon.svg';
import axios from 'axios';

export const CartModal = ({ onClose, isModalOpen }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchSelectedItems() {
      try {
        const result = await axios.get('http://localhost:3003/api/selectedProducts/id');
        setCartItems(result.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchSelectedItems();
  }, []);

  return (
    <Dialog open={isModalOpen} onClose={onClose}>
      <DialogTitle>Shopping Cart</DialogTitle>
      <DialogContent>
        {[{ title: 'sushi', price: '35$', id: '7erg32yrf4' }].map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px',
              backgroundColor: 'red',
              borderBottom: '1px solid #ccc',
            }}
          >
            <h3
              style={{
                flex: 1,
                marginRight: '16px',
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              {item.title}
            </h3>
            <div
              style={{
                minWidth: '60px',
              }}
            >
              {item.price}
            </div>
          </div>
        ))}
        <Button onClick={onClose} color="primary">
          <img alt="closeIcon" src={closeIcon} width="25px" height="25px" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

// export default CartModal;
