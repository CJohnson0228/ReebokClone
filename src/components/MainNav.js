import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Icon from '@material-ui/core/Icon';

import Logo from '../assets/img/reebokLogoTransparentNew.png';
import AdidasBar from './AdidasBar';

const useStyles = makeStyles((theme) => ({
  navTabs: {
    color: theme.palette.text.primary,
    margin: '0 5px',
    display: 'flex',
    alignSelf: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderBottom: '1px solid #fff',
    '&:hover': {
      borderBottom: '1px solid #000',
    }
  },
  navTabsText: {
    fontSize: "1rem",
  },
  navTabsTextBold: {
    fontSize: "1rem",
    fontWeight: 'bold',
  },
}));

const adOne = <div>Mid-Season Sale | Extra 50% Off Markdowns | Code: MSS</div>;
const adTwo = <div><Icon fontSize='inherit'>local_shipping</Icon> Members get Free Shipping & Returns | JOIN NOW</div>;

function MainNav() {
  const [cycleAd, setCycleAd] = useState(adOne)
  const classes = useStyles();

  useEffect(() => {
    const timer = setInterval(() => {
      setCycleAd(previousAd => {
        const newAd = previousAd === adOne ? adTwo : adOne;
        return newAd
      });
    }, 5000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <AppBar 
        style={{
          backgroundColor: 'white', 
          color: 'Black',
          paddingBottom: 0}}>
      <Box 
          style={{
            backgroundColor: '#264393', 
            color: 'white',
            padding: '8px 0'}}>
        <Typography 
            variant="body2" 
            align="center"
            style={{ fontSize: '.7rem' }}>
              {cycleAd}
        </Typography>
      </Box>
      <Container 
          style={{ minWidth: "90%" }}>
        <AdidasBar />
        <Toolbar style={{ minHeight: '50px'}}>
          <Grid 
              container 
              justifyContent="space-between" 
              alignItems="center" 
              direction="row">
            <Grid 
                item 
                container
                xs={7}>
              <IconButton 
                  edge="start">
                <img src={Logo} alt="Reebok" style={{ height: "30px" }} />
              </IconButton>
              <Link to="/department" className={classes.navTabs}>
                <Typography variant="h6" className={classes.navTabsTextBold}>Women</Typography>
              </Link>
              <Link to="/department"  className={classes.navTabs}>
                <Typography variant="h6" className={classes.navTabsTextBold}>Men</Typography>
              </Link>
              <Link to="/department" className={classes.navTabs}>
                <Typography variant="h6" className={classes.navTabsTextBold}>Kids</Typography>
              </Link>
              <Link to="/department" className={classes.navTabs}>
                <Typography variant="h6" className={classes.navTabsText}>Unisex</Typography>
              </Link>
              <Link to="/department" className={classes.navTabs}>
                <Typography variant="h6" className={classes.navTabsText}>Release Dates</Typography>
              </Link>
              <Link to="/department" className={classes.navTabs}>
                <Typography variant="h6" className={classes.navTabsText}>Sale</Typography>
              </Link> 
            </Grid>
            <Grid 
                item 
                container 
                justifyContent="flex-end" 
                alignItems="center" 
                xs={5} 
                spacing={2}>
              <Grid 
                  item 
                  container 
                  justifyContent="space-between" 
                  alignItems="center"  
                  style={{
                    borderBottom: '1px solid #000', 
                    width: '40%',
                    paddingBottom: 0}}>
                <InputBase placeholder="Search" style={{ width: '100px'}}/>
                <SearchIcon/>
              </Grid>
              <Grid item spacing={2} style={{ paddingBottom: 0 }}><PermIdentityIcon /></Grid>
              <Grid item spacing={2} style={{ paddingBottom: 0 }}><LocalMallIcon /></Grid>  
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MainNav
