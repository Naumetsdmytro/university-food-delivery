import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';

export const ProductCard = ({ title, description, price, imageUrl }) => {
  const handleButtonClick = async () => {
    await axios.put('http://localhost:5000/api/selectedProducts/id', {
      title,
      price,
    });
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
