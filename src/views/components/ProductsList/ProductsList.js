import ProductCard from '../ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './ProductsList.module.css';

export const ProductsList = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('http://192.168.31.131:5000/api/product');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
  const products = [
    {
      id: 'fh3484tghh34fg4j9h',
      title: 'sushi',
      description: 'fyuwe4brn egrengenrg er gergergerg rgergregergr',
      price: '43',
    },
  ];

  return (
    <ul className={styles.productsList}>
      {products.map(({ id, title, description, imageUrl, price }) => {
        return <ProductCard key={id} title={title} description={description} price={price} imageUrl={imageUrl} />;
      })}
    </ul>
  );
};