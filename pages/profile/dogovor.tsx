import styles from '../../styles/Home.module.css'
import ResponsiveAppBarProfile from '../../components/BarProfile'
import Footer from '../../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider, Drawer, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, IconButton, MenuItem } from '@mui/material'
import * as React from 'react';
import 'react-phone-input-2/lib/style.css'
import CssBaseline from '@mui/material/CssBaseline';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComp from '../../components/Drawer';

const drawerWidth = 240;


const theme = createTheme();

const currencies = [
  {
    value: 'Мужской',
    label: 'Мужской',
  },
  {
    value: 'Женскй',
    label: 'Женский',
  },
  {
    value: 'Другое',
    label: 'Другое',
  },
];

export default function Dogovor(this: any) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    return(
     
<Grid item sx={{ maxWidth: {lg:'80%', xs:'calc(100% - 40px)',xl:'1440px'}, marginLeft:{xs:'20px', lg:'10%', xl:'auto'}, marginRight:{xs:'20px', lg:'10%',xl:'auto'}, height: 'auto'}}>
<ResponsiveAppBarProfile />
      <div className={styles.main}>

      <Grid sx={{width:'100vw', backgroundColor: '#f9f7ff', height: '100%'}}>
        <Grid container columns={12} spacing={{md:4,xs:0}} sx={{marginTop:'0 !important', maxWidth: {lg:'80%', xs:'calc(100% - 40px)',xl:'1440px'}, marginLeft:{xs:'20px', lg:'10%', xl:'auto'}, marginRight:{xs:'20px', lg:'10%',xl:'auto'},minHeight:'calc(100vh - 70px - 81px)'}}>
        <DrawerComp />
      <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'flex' }, paddingTop:0  }}></Grid>
        <Grid item xs={4} sx={{paddingTop:'85px !important'}}>
          <IconButton>
 <Avatar 
  src="/images/example.jpg" 
  style={{
    margin: 0,
    width: "251px",
    height: "251px",
  }} 
 />
</IconButton></Grid>
        <Grid item xs={12} md={6} sx={{paddingTop:'85px !important'}}>
        <Grid container columns={12} sx={{paddingTop:'0'}}>
         
<Grid item xs={12} >
<Typography>Имя и Фамилия</Typography>
<TextField variant="standard" sx={{width:'171px', ".css-1ptx2yq-MuiInputBase-root-MuiInput-root:before":{borderBottom: '1px solid #FFA630'},
            ".MuiInputBase-root": { backgroundColor: '#f9f7ff', borderBottom: '1px solid #FFA630', height: '55px', fontSize:'1.2rem', paddingLeft:'10px' }}} placeholder='' />

<Typography sx={{marginTop:'20px'}}>Дата рождения</Typography>
<TextField type="date" variant="standard" sx={{width:'171px',".css-1ptx2yq-MuiInputBase-root-MuiInput-root:before":{borderBottom: '1px solid #FFA630'},
            ".MuiInputBase-root": { backgroundColor: '#f9f7ff', borderBottom: '1px solid #FFA630', height: '55px', fontSize:'1.2rem', paddingLeft:'10px' }}} placeholder='' />

<Typography sx={{marginTop:'20px'}}>Пол</Typography>
<TextField select variant="standard" sx={{width:'171px',".css-1ptx2yq-MuiInputBase-root-MuiInput-root:before":{borderBottom: '1px solid #FFA630'},
            ".MuiInputBase-root": { backgroundColor: '#f9f7ff', borderBottom: '1px solid #FFA630', height: '55px', fontSize:'1.2rem', paddingLeft:'10px' }}} placeholder=''>
              {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
              </TextField>
</Grid>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
        <Footer />
      </div>
    </Grid>
    );
}