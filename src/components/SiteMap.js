import React from 'react';

import {makeStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px auto',
  },
  sectionTitle: {
    margin: '5px auto',
    fontWeight: 'bold',
  },
  link: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    }
  },
  columns: {
    width: '20%',
  }
}));

function SiteMap() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justifyContent='space-between'>
        <Grid item className={classes.columns}>
          <Typography 
            variant="h6"
            className={classes.sectionTitle}>
              TRENDING
          </Typography>
          <Typography variant="body2" className={classes.link}>Gifts for Her</Typography>
          <Typography variant="body2" className={classes.link}>Gifts for Him</Typography>
          <Typography variant="body2" className={classes.link}>Unisex Gifts</Typography>
          <Typography variant="body2" className={classes.link}>High Tops</Typography>
          <Typography variant="body2" className={classes.link}>Hiking</Typography>
          <Typography variant="body2" className={classes.link}>Black Shoes</Typography>
          <Typography variant="body2" className={classes.link}>Nursing Shoes</Typography>
          <Typography variant="body2" className={classes.link}>Men's Track Pants</Typography>
          <Typography variant="body2" className={classes.link}>Women's Athletic Leggins</Typography>
          <Typography variant="body2" className={classes.link}>90's Windbreakers</Typography>
        </Grid>
        <Grid item className={classes.columns}>
          <Typography 
            variant="h6"
            className={classes.sectionTitle}>
              FRANCHISE
          </Typography>
          <Typography variant="body2" className={classes.link}>Zig</Typography>
          <Typography variant="body2" className={classes.link}>Nano</Typography>
          <Typography variant="body2" className={classes.link}>Floatride</Typography>
          <Typography variant="body2" className={classes.link}>Club C</Typography>
          <Typography variant="body2" className={classes.link}>Classic Leather</Typography>
          <Typography variant="body2" className={classes.link}>Pump</Typography>
          <Typography variant="body2" className={classes.link}>Workout</Typography>
          <Typography variant="body2" className={classes.link}>Freesyle Hi</Typography>
          <Typography variant="body2" className={classes.link}>Classic Nylon</Typography>
        </Grid>
        <Grid item className={classes.columns}>
          <Typography 
            variant="h6"
            className={classes.sectionTitle}>
              EXPLORE
          </Typography>
          <Typography variant="body2" className={classes.link}>Blog</Typography>
          <Typography variant="body2" className={classes.link}>Home Workouts</Typography>
          <Typography variant="body2" className={classes.link}>Human Rights Award</Typography>
          <Typography variant="body2" className={classes.link}>Reebok Love</Typography>
          <Typography variant="body2" className={classes.link}>Build Our Kids' Success</Typography>
          <Typography 
            variant="h6"
            className={classes.sectionTitle}>
              COMPANY INFO
          </Typography>
          <Typography variant="body2" className={classes.link}>Sustainability</Typography>
          <Typography variant="body2" className={classes.link}>Careers</Typography>
          <Typography variant="body2" className={classes.link}>About Us</Typography>
          <Typography variant="body2" className={classes.link}>Terms & Conditions</Typography>
          <Typography variant="body2" className={classes.link}>Privacy Policy</Typography>
          <Typography variant="body2" className={classes.link}>California Transparency in Supply Chains Act</Typography>
          <Typography variant="body2" className={classes.link}>News</Typography>
        </Grid>
        <Grid item className={classes.columns}>
          <Typography 
            variant="h6"
            className={classes.sectionTitle}>
              SUPPORT
          </Typography>
          <Typography variant="body2" className={classes.link}>Return & Exchange Policy</Typography>
          <Typography variant="body2" className={classes.link}>Self-Service Returns</Typography>
          <Typography variant="body2" className={classes.link}>Store Locator</Typography>
          <Typography variant="body2" className={classes.link}>FAQs</Typography>
          <Typography variant="body2" className={classes.link}>Shipping & Delivery</Typography>
          <Typography variant="body2" className={classes.link}>Track Your Order</Typography>
          <Typography variant="body2" className={classes.link}>My Account</Typography>
          <Typography variant="body2" className={classes.link}>Contact Us</Typography>
        </Grid>
        <Grid item className={classes.columns}>
          <Typography 
            variant="h6"
            className={classes.sectionTitle}>
              GIFT CARDS
          </Typography>
          <Typography variant="body2" className={classes.link}>E-Gift Cards</Typography>
          <Typography variant="body2" className={classes.link}>Physical Gift Cards</Typography>
          <Typography variant="body2" className={classes.link}>Check Your Balance</Typography>
          <Typography 
            variant="h6"
            className={classes.sectionTitle}>
              REEBOK PROGRAMS
          </Typography>
          <Typography variant="body2" className={classes.link}>Reebok Promotions</Typography>
          <Typography variant="body2" className={classes.link}>Hero Discount Program</Typography>
          <Typography variant="body2" className={classes.link}>Student Discount Program</Typography>
          <Typography variant="body2" className={classes.link}>Affiliate Programs</Typography>
          <Typography variant="body2" className={classes.link}>ReebokONE Trainer Network</Typography>
          <Typography variant="body2" className={classes.link}>Reebok UNLOCKED-Loyalty Program</Typography>
          <Typography variant="body2" className={classes.link}>Reebok Boston Track Club</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SiteMap;