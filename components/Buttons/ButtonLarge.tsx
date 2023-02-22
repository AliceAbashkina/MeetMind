import { createTheme } from '@mui/material/styles';

const buttonL= createTheme();
buttonL.typography.button = {
    fontFamily: 'Roboto',
    background:'#FFA630',
    textTransform: 'inherit',
    whiteSpace:'nowrap',
    "&.MuiButton-root:hover": {
      background:'#BAA5FF',
      transition:'1s',
    },
    "&.MuiButton-text": {
        color: "#FFF",
      },
      "&.MuiButton-root": {
        borderRadius:'80px',
        padding:'22px 40px',
      },
    [buttonL.breakpoints.only('xl')]: {
      fontSize: '26px',
      height: '74px'
    },
    [buttonL.breakpoints.only('lg')]: {
        fontSize: '26px',
        height: '64px'
    },
    [buttonL.breakpoints.only('sm')]: {
      fontSize: '20px',
      height: '64px'
  },
    [buttonL.breakpoints.up('xs')]: {
        fontSize: '26px',
        height: '64px'
    },
  };

  export default buttonL;