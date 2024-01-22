import ProductCard from '../ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './ProductsList.module.css';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get('http://192.168.31.131:5000/api/product');
        // setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ul className={styles.productsList}>
      {[
        {
          id: 'rn2ui3qwdewd4r43iowrfn',
          title: 'Sushi',
          description: 'ifnveuirwnifnw ewfuiewnrfnewfuiewniuwenf',
          imageUrl: 'ncwiuef',
          price: '40',
        },
      ].map(({ id, title, description, imageUrl, price }) => {
        return (
          <ProductCard key={id} id={id} title={title} description={description} price={price} imageUrl={imageUrl} />
        );
      })}
    </ul>
  );
};
