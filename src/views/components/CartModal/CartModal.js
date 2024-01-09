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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <DialogTitle
          style={{
            textAlign: 'center',
          }}
        >
          Shopping Cart
        </DialogTitle>
        <Button onClick={onClose} color="primary">
          <img alt="closeIcon" src={closeIcon} width="25px" height="25px" />
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h3
          style={{
            marginRight: '135px',
          }}
        >
          Dish
        </h3>
        <h3
          style={{
            marginRight: '100px',
          }}
        >
          Count
        </h3>
        <h3>Price</h3>
      </div>
      <DialogContent>
        {[
          { title: 'Sushi', count: '3', price: '35$', id: '7erg32yrf4' },
          { title: 'Ramen', count: '1', price: '50$', id: '7erg32yf4' },
        ].map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <h3
              style={{
                flex: 1,
                fontWeight: 'bold',
                marginRight: '130px',
              }}
            >
              {item.title}
            </h3>
            <div
              style={{
                marginRight: '130px',
                fontWeight: 'bold',
              }}
            >
              {item.count}
            </div>
            <div
              style={{
                fontWeight: 'bold',
              }}
            >
              {item.price}
            </div>
          </div>
        ))}
        <Button
          onClick={onClose}
          color="primary"
          style={{
            marginTop: '30px',
            width: '100%',
            backgroundColor: 'mediumpurple',
            color: 'white',
          }}
        >
          Proceed to payment
        </Button>
      </DialogContent>
    </Dialog>
  );
};

// export default CartModal;
