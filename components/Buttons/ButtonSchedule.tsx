import { createTheme } from '@mui/material/styles';

const buttonSchedule= createTheme();
buttonSchedule.typography.button = {
    fontFamily: 'Roboto',
    background:'none',
    textTransform: 'inherit',
    border: '1px solid #FFA630',
    marginRight: '11px',
    "&.MuiButton-root:hover": {
      background:'#BAA5FF',
      border: '1px solid #BAA5FF',
      transition:'1s',
    },
    "&.MuiButton-text": {
        color: '#4E4E4E',
    },
    "&.MuiButton-text: hover": {
        color: '#fff',
    },
      "&.MuiButton-root": {
        borderRadius: '36px',
        padding: '8px 15px',
      },
    [buttonSchedule.breakpoints.only('xl')]: {
      fontSize: '14px',
      height: '32px'
    },
    [buttonSchedule.breakpoints.only('lg')]: {
        fontSize: '14px',
        height: '32px'
    },

    [buttonSchedule.breakpoints.up('xs')]: {
        fontSize: '14px',
        height: '32px'
    },
  };

  export default buttonSchedule;