import { createTheme } from '@mui/material/styles';

const Header3= createTheme();

Header3.typography.h3 = {
fontFamily:'Roboto',
fontWeight: 400,
color: '#4E4E4E', 
[Header3.breakpoints.only('xl')]: {
  fontSize: '24px',
},
[Header3.breakpoints.only('lg')]: {
  fontSize: '24px',
},
    [Header3.breakpoints.only('md')]: {
      fontSize: '24px',
    },
    [Header3.breakpoints.only('sm')]: {
      fontSize: '24px',
    },
    [Header3.breakpoints.only('xs')]: {
      fontSize: '24px',
    },
  };

  export default Header3;

