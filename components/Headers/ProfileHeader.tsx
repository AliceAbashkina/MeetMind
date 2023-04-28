import { createTheme } from '@mui/material/styles';

const ProfileHeader= createTheme();

ProfileHeader.typography.h6 = {
fontFamily:'Roboto',
fontWeight: 600,
color: '#4E4E4E', 
[ProfileHeader.breakpoints.only('xl')]: {
  fontSize: '14px',
},
[ProfileHeader.breakpoints.only('lg')]: {
  fontSize: '14px',
},
    [ProfileHeader.breakpoints.only('md')]: {
      fontSize: '14px',
    },
    [ProfileHeader.breakpoints.only('sm')]: {
      fontSize: '14px',
    },
    [ProfileHeader.breakpoints.only('xs')]: {
      fontSize: '14px',
    },
  };

  ProfileHeader.typography.h3 = {
    fontFamily:'Roboto',
    fontWeight: 600,
    color: '#4E4E4E', 
    [ProfileHeader.breakpoints.only('xl')]: {
      fontSize: '20px',
    },
    [ProfileHeader.breakpoints.only('lg')]: {
      fontSize: '20px',
    },
        [ProfileHeader.breakpoints.only('md')]: {
          fontSize: '20px',
        },
        [ProfileHeader.breakpoints.only('sm')]: {
          fontSize: '20px',
        },
        [ProfileHeader.breakpoints.only('xs')]: {
          fontSize: '20px',
        },
      };

  export default ProfileHeader;

