import React from 'react';
import ReactPlayer from 'react-player/lazy';

import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import HeroVideo from '../assets/video/180301_07_B_HongKongIsland_13.mp4';

const useStyles = makeStyles((theme) => ({
  box: {
    height: "min-content",
    width: "100vw",
    position: 'relative',
    '&video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
  button: {
    color: '#000',
    borderRadius: 0,
    backgroundColor: '#fff',
    marginTop: '10px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: "#ccc",
    }
  }
}));

function VidSplash() {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <ReactPlayer url={HeroVideo} playing loop muted height="100%" width="100%"/>
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1">
            Reebok X Series
          </Typography>
          <Typography variant="body1" className={classes.title}>Like a buried treasure... X marks the spot!</Typography>
          <Button variant="contained" className={classes.button}>
            Explore Now
          </Button>
        </Box>
      </div>
    </div>
  )
}

export default VidSplash
