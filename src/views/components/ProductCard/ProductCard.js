import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const ProductCard = ({ title, description, price, imageUrl, id }) => {
  const handleButtonClick = async () => {
    try {
      const currentSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
      const productIndex = currentSelectedProducts.findIndex((product) => product.title === title);

      if (productIndex !== -1) {
        currentSelectedProducts[productIndex].count += 1;
        currentSelectedProducts[productIndex].price =
          Number(currentSelectedProducts[productIndex].price) + Number(price);
      } else {
        const newProduct = { title, price, id, count: 1 };
        currentSelectedProducts.push(newProduct);
      }

      localStorage.setItem('selectedProducts', JSON.stringify(currentSelectedProducts));
    } catch (error) {
      console.error('Error while updating selected products:', error);
    }
  };

  return (
    <li>
      <Card
        sx={{
          maxWidth: 340,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 360,
        }}
      >
        <CardMedia component="img" height="256" src={imageUrl} alt="Fish and chips" />
        <CardContent>
          <Typography gutterBottom variant="p" component="h3" style={{ fontWeight: '500' }}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: 60,
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="p" component="p" style={{ fontSize: '20px', fontWeight: '500' }}>
            {price}
          </Typography>
          <Button variant="contained" size="small" onClick={handleButtonClick}>
            Add to cart
          </Button>
        </Box>
      </Card>
    </li>
  );
};
