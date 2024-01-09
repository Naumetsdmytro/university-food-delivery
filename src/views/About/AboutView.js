import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Replace these with your actual image imports
import sushiPlate from '../../images/ramen.jpeg';
import chefPreparing from '../../images/chef.avif';
import restaurantInterior from '../../images/restaurant.png';

const ImageCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  transition: 'transform 0.15s ease-in-out',
  '&:hover': {
    transform: 'scale3d(1.02, 1.02, 1)',
  },
}));

const AboutView = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom component="div" textAlign="center" mb={4}>
        About Us
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <ImageCard>
            <CardMedia component="img" height="300" image={sushiPlate} alt="Sushi Plate" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Our Cuisine
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '17px' }}>
                We pride ourselves on using the freshest ingredients to create both classic sushi and innovative fusion
                dishes.
              </Typography>
            </CardContent>
          </ImageCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Introduction
          </Typography>
          <Typography paragraph sx={{ fontSize: '18px' }}>
            Welcome to Japan Symphony, where tradition meets innovation in Japanese culinary art. Our journey began in
            2018, with a passion for bringing the authentic flavors of Japan to Ivano-Frankivsk. Nestled in the heart of
            the city, our restaurant offers a sanctuary of taste, blending the delicate balance of traditional Japanese
            recipes with modern gastronomy.
          </Typography>
          <Typography paragraph sx={{ fontSize: '18px' }}>
            At Japan Symphony, we celebrate the rich culture and heritage of Japan with every dish. Our dedication to
            authenticity and excellence has allowed us to craft a dining experience that honors the sophisticated
            flavors and rituals of Japanese cuisine.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Our Story
          </Typography>
          <Typography paragraph sx={{ fontSize: '18px' }}>
            Japan Symphony was born out of a love for rich Japanese culinary traditions and a desire to share them with
            the world. Our founder, Dima Naumets, started with a vision to create a unique dining experience that
            transcends the ordinary.
          </Typography>
          <Typography sx={{ fontSize: '18px' }}>
            Drawing inspiration from the bustling streets of Tokyo to the serene landscapes of Kyoto, our menu is a
            testament to the diverse flavors of Japan. Each dish is crafted to tell a story, bringing a piece of
            Japanese culture to your table.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <ImageCard>
            <CardMedia component="img" height="300" image={chefPreparing} alt="Chef Preparing Food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mastery in Every Meal
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '17px' }}>
                Our chefs are artisans, each with a deep respect for the ingredients and the intricate processes that
                make Japanese cuisine so special.
              </Typography>
            </CardContent>
          </ImageCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageCard>
            <CardMedia component="img" height="300" image={restaurantInterior} alt="Sushi Plate" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                A Harmonious of Elegance and Comfort
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '17px' }}>
                Japan Symphony's interior combines modern elegance with traditional Japanese style, offering a serene
                and inviting dining ambiance.
              </Typography>
            </CardContent>
          </ImageCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Our Commitment to Quality
          </Typography>
          <Typography paragraph sx={{ fontSize: '18px' }}>
            Quality is not just a concept, but a promise that is woven into the very fabric of our ethos at Japan
            Symphony. Every dish that leaves our kitchen is a reflection of our unwavering commitment to excellence. Our
            expert chefs, steeped in the traditions of Japanese culinary arts.
          </Typography>
          <Typography sx={{ fontSize: '18px' }}>
            We believe that the essence of Japanese cuisine lies in the harmony of flavors, the precision of techniques,
            and the purity of the presentation. This belief drives us to source only the finest ingredients, whether it
            be locally grown produce that captures the essence of the seasons or the highest grade of sustainably
            sourced seafood.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography paragraph sx={{ fontSize: '17px' }}>
              For orders, inquiries, or just to say hello, feel free to contact us at [Contact Details]. Follow us on
              [Social Media Links] to stay updated with our latest offerings and news.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutView;
