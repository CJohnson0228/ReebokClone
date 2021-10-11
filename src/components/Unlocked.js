import React from 'react';

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import unlockedBG from '../assets/img/reebockUnlocked_mockup.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: 'cover',
    height: '50vw',
    width: '100vw',
    margin: 0,
    marginTop: '50px',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '30%',
    height: '100%',
    marginLeft: '8%',
  },
  members: {
    color: 'red',
    margin: '5px 0',
  },
  unlockedTitle: {
    margin: '5px auto',
  },
  unlockedBody: {
    margin: '5px auto',
  },
  button: {
    margin: '5px auto 15px',
    backgroundColor: '#000',
    borderRadius: 0,
    color: "#fff",
    '&:hover': {
      backgroundColor: '#264393',
      color: '#fff',
    },
  }
}));

function Unlocked() {
  const classes = useStyles();

  return (
    <Box 
      className={classes.root} 
      disableGutters='true'
      style={{
        backgroundImage: `url(${unlockedBG})`}}>
      <Box className={classes.contentContainer}>
        <Typography 
          variant="h6" 
          className={classes.members}>
            <Icon fontSize='inherit'>lock_open_icon</Icon>Members Only
        </Typography>
        <Typography 
          variant="h3" 
          className={classes.unlockedTitle}>
            UNLOCK THE BEST WEEK EVER
        </Typography>
        <Typography 
          variant="body1" 
          className={classes.unlockedBody}>
            Get ready for 7 full days of members-only drops, offers and sweepstakes 10/13-10/19. You in?
        </Typography>
        <Box>
          <Button 
            variant="contained" 
            className={classes.button}>
              Explore
          </Button>
        </Box>
        <Typography>Join Reebok UNLOCKED</Typography>
      </Box>
    </Box>
  )
}

export default Unlocked
