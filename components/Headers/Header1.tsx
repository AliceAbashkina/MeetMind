import { createTheme } from '@mui/material/styles';

const Header1= createTheme();

Header1.typography.h2 = {
fontFamily:'Poppins',
fontWeight: 700,
color: '#514573', 
[Header1.breakpoints.only('xl')]: {
  fontSize: '64px',
},
[Header1.breakpoints.only('lg')]: {
  fontSize: '64px',
},
    [Header1.breakpoints.only('md')]: {
      fontSize: '48px',
    },
    [Header1.breakpoints.only('sm')]: {
      fontSize: '48px',
    },
    [Header1.breakpoints.only('xs')]: {
      fontSize: '36px',
    },
  };

  export default Header1;

