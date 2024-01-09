import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardActionArea, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import sushiBanner from '../../images/sushiBanner.png';
import featureOne from '../../images/feature-one.png';
import featureTwo from '../../images/feature-two.png';
import featureThree from '../../images/feature-three.png';

const featuresText = [
  "Our restaurant's interior embraces the tranquil elegance of classic Japanese style, featuring clean lines and a harmonious balance that invites a sense of peace",
  'We meticulously craft our dishes using authentic Japanese recipes, ensuring that each bite offers a genuine taste of the land of the rising sun',
  'Our unwavering commitment to customer satisfaction is designed to transport our guests to Japan with every visit. You will feel real Tokyo vibe',
];

const featuresTitles = ['Interior', 'Food Root', 'Japan Atmosphere'];

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    padding: 0,
    maxWidth: '100%',
  },
  banner: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${sushiBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '10px',
    height: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'transform .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  title: {
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '10px',
    color: '#fff',
    padding: theme.spacing(1),
  },
  subtitle: {
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    color: '#fff',
    padding: theme.spacing(1),
  },
  gridContainer: {
    marginTop: theme.spacing(4),
  },
  featureCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardActionArea: {
    transition: 'transform .5s ease-in-out, box-shadow .5s ease-in-out',
  },
  cardMedia: {
    paddingTop: '86.25%',
  },
  orderButton: {
    padding: theme.spacing(1.4),
    marginTop: theme.spacing(3),
    cursor: 'pointer',
    borderRadius: '15px',
  },
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.banner} sx={{ margin: 0 }}>
        <Typography variant="h2" component="h1" gutterBottom className={classes.title}>
          Welcome to Japan Symphony
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Experience the taste of traditional Japanese cuisine in Ivano-Frankivsk
        </Typography>
        <Button variant="contained" color="secondary" className={classes.orderButton}>
          Order Now
        </Button>
      </Box>

      <Grid container spacing={4} className={classes.gridContainer}>
        {[featureOne, featureTwo, featureThree].map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.featureCard}>
              <CardActionArea className={classes.cardActionArea}>
                <CardMedia className={classes.cardMedia} image={feature} title="interior" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {featuresTitles[index]}
                  </Typography>
                  <Typography>{featuresText[index]}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeView;
