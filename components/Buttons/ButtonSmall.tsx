import { createTheme } from '@mui/material/styles';

const buttonS = createTheme();
buttonS.typography.button = {
    fontFamily: 'Roboto',
    background:'#FFA630',
    whiteSpace:'nowrap',
    textTransform: 'inherit',
    "&.MuiButton-root:hover": {
      background:'#BAA5FF',
      transition:'1s',
    },
    "&.MuiButton-text": {
        color: "#FFF",
      },
      "&.MuiButton-root": {
        borderRadius:'20px',
        padding:'8px 15px',
      },
    [buttonS.breakpoints.only('xl')]: {
      fontSize: '14px',
      height: '32px'
    },
    [buttonS.breakpoints.only('lg')]: {
        fontSize: '14px',
        height: '32px'
    },

    [buttonS.breakpoints.up('xs')]: {
        fontSize: '14px',
        height: '32px'
    },
  };

  export default buttonS;