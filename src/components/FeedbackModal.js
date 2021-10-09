import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const FeedbackModal = withStyles({
  root: {
      position: 'fixed',
      right: 0,
      top: '35vh',
      width: "15px",
      height: "150px",
      backgroundColor: '#fff',
      borderRadius: '5px 0 0 5px',
      padding: '5px',
      '&:hover': {
        backgroundColor: '#ddd',
      }
    },
    label: {
      transform: 'rotate(-90deg)',
      fontWeight: 'bold',
    }
})(Button);
