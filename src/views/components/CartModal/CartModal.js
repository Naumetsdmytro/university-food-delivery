import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import closeIcon from '../../../images/closeIcon.svg';
import binIcon from '../../../images/bin 18.35.38.svg';
import styles from './CartModal.module.css';

export const CartModal = ({ onClose, isModalOpen }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const currentSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    setCartItems(currentSelectedProducts);
  }, []);

  let totalPrice = 0;

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
        {cartItems.map((item) => {
          totalPrice += Number(item.price);
          return (
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
                  marginRight: '20px',
                }}
              >
                {item.price}
              </div>
              <DeleteButton id={item.id} setCartItems={setCartItems} />
            </div>
          );
        })}
        <p>Total: {totalPrice}</p>
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

const DeleteButton = ({ id, setCartItems }) => {
  const handleButtonClick = (evt) => {
    const storedData = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    const indexToDelete = storedData.findIndex((product) => product.id === id);

    if (indexToDelete !== -1) {
      storedData.splice(indexToDelete, 1);
      localStorage.setItem('selectedProducts', JSON.stringify(storedData));
      setCartItems(storedData);
    }
  };
  return (
    <button variant="contained" size="small" onClick={handleButtonClick} className={styles.deleteButton}>
      <img width="20px" height="20px" src={binIcon} alt="bin"></img>
    </button>
  );
};
