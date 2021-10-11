import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function Footer() {
  return (
  <Box 
    style={{
      backgroundColor: '#264393', 
      color: 'white',
      padding: '8px 0'}}>
    <Container>
      <Grid container justifyContent='space-between' direction='row'>
        <Grid container item style={{ width: 'auto'}}>
          <Grid item>USA</Grid>
        </Grid>
        <Grid container item justifyContent='space-evenly' style={{ width: 'auto'}} spacing={2}>
          <Grid item>Data Settings</Grid>
          <Typography variant="h6">|</Typography>
          <Grid item>Do not sell my personal information</Grid>
          <Typography variant="h6">|</Typography>
          <Grid item>Cookies</Grid>
          <Typography variant="h6">|</Typography>
          <Grid item>Sitemap</Grid>
          <Typography variant="h6">|</Typography>
          <Grid item>Terms & Conditions</Grid>
          <Typography variant="h6">|</Typography>
          <Grid item>Privacy Policy</Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
  )
}

export default Footer
