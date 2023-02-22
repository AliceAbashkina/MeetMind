import { createTheme } from '@mui/material/styles';

const Header2= createTheme();

Header2.typography.h2 = {
fontFamily:'Poppins',
fontWeight: 700,
lineHeight: '59px',
textAlign: 'center',
[Header2.breakpoints.only('xl')]: {
  fontSize: '48px',
},
[Header2.breakpoints.only('lg')]: {
  fontSize: '48px',
},
    [Header2.breakpoints.only('md')]: {
      fontSize: '48px',
    },
    [Header2.breakpoints.only('sm')]: {
      fontSize: '40px',
    },
    [Header2.breakpoints.only('xs')]: {
      fontSize: '30px',
    },
  };

  export default Header2;

