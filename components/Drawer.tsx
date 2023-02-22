import { Grid, Typography,Drawer, Box,IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Link from 'next/link';

const drawerWidth = 240;
const buttonSX = {
  font:'Roboto',
  fontSize:'20px',
  color:'#4E4E4E',
  padding:'15px 29px',
  "&:hover": {
    color: "#FFA630",
    backgroundColor:'rgba(255, 166, 48, 0.26)',
    border: '1px solid #FFA630',
    borderRadius: '96px',
    padding:'15px 29px',
  },
};

function DrawerComp(){
    const [mobileOpen, setMobileOpen] = React.useState(false);
const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
};
return(
<Grid item xs={12} md={2} sx={{paddingTop:{md:'85px !important', xs:'32px !important'}}}>
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display:{md:'flex',xs:'none'},
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', display:'contents' },
        }}
      >
        <Box sx={{display:'flex', flexDirection:'column'}}>
        <Link href="/"><a style={{textDecoration:'none'}}><Typography sx={buttonSX}>Главная</Typography></a></Link>
        <Link href="/profile"><a style={{textDecoration:'none'}}><Typography sx={buttonSX}>Профиль</Typography></a></Link>
        <Link href="/profile/dogovor"><a style={{textDecoration:'none'}}><Typography sx={buttonSX}>Договор</Typography></a></Link>
        <Link href="/profile/dogovor"><a style={{textDecoration:'none'}}><Typography sx={buttonSX}>Специализация</Typography></a></Link>
        <Link href="/profile/dogovor"><a style={{textDecoration:'none'}}><Typography sx={buttonSX}>Расписание</Typography></a></Link>
        <Link href="/profile/dogovor"><a style={{textDecoration:'none'}}><Typography sx={buttonSX}>Клиенты</Typography></a></Link>
        <Link href="/profile/dogovor"><a style={{textDecoration:'none'}}><Typography sx={buttonSX}>Статистика</Typography></a></Link>
        <Link href="/profile/dogovor"><a style={{textDecoration:'none'}}><Typography sx={buttonSX}>Выплаты</Typography></a></Link>

        </Box>
      </Drawer>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          > <MenuIcon />
            </IconButton>
      <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, display:'contents'  },
          }}
        >
          <Typography sx={{marginBottom:'30px'}}>Главная</Typography>
          <Typography sx={{marginBottom:'30px'}}>Профиль</Typography>
          <Typography sx={{marginBottom:'30px'}}>Договор</Typography>
          <Typography sx={{marginBottom:'30px'}}>Специализация</Typography>
          <Typography sx={{marginBottom:'30px'}}>Расписание</Typography>
          <Typography sx={{marginBottom:'30px'}}>Клиенты</Typography>
          <Typography sx={{marginBottom:'30px'}}>Статистика</Typography>
          <Typography sx={{marginBottom:'30px'}}>Выплаты</Typography>
        </Drawer>
      </Grid>
);
};
export default DrawerComp;