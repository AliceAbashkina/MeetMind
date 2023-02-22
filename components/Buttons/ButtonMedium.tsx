import { createTheme } from '@mui/material/styles';

const buttonM= createTheme();
buttonM.typography.button = {
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
        borderRadius:'40px',
        padding:'16px 30px',
      },
    [buttonM.breakpoints.only('xl')]: {
      fontSize: '20px',
      height: '55px'
    },
    [buttonM.breakpoints.only('lg')]: {
        fontSize: '20px',
        height: '55px'
    },

    [buttonM.breakpoints.up('xs')]: {
        fontSize: '20px',
        height: '55px'
    },
  };

  export default buttonM;