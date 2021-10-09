import React from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function AdidasBar() {
  return (
    <Toolbar style={{minHeight: '100%', padding: '10px 0 0', fontSize: '12px'}}>
      <Grid container justifyContent="flex-end" alignItems="center" spacing={3} style={{padding: '0 24px'}}>
        <Grid item>
          <Typography 
              variant="inherit">
                also visit <span style={{fontWeight: 'bold', fontSize: '1.1rem', marginRight: '20px'}}>adidas</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
              variant="inherit">
                blog
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
              variant="inherit">
                help
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
              variant="inherit">
                exchanges & returns
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
              variant="inherit">
                order tracker
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
              variant="inherit">
                newsletter signup
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
              variant="inherit">
                reebok unlocked
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
              variant="inherit">
                login
          </Typography>
        </Grid>
      </Grid> 
    </Toolbar>
  )
}

export default AdidasBar
