import { Grid, Typography, Drawer, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Link from 'next/link';

const drawerWidth = 240;
const buttonSX = {
  font: 'Roboto',
  fontSize: '20px',
  color: '#4E4E4E',
  padding: '15px 29px',
  "&:hover": {
    color: "#FFA630",
    backgroundColor: 'rgba(255, 166, 48, 0.26)',
    border: '1px solid #FFA630',
    borderRadius: '96px',
    padding: '14px 29px',
  },
};

function DrawerCompClient() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Grid item xs={12} md={2} sx={{ paddingTop: { md: '85px !important', xs: '32px !important' } }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { md: 'flex', xs: 'none' },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', display: 'contents' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/"><a style={{ textDecoration: 'none' }}><Typography sx={buttonSX}>Главная</Typography></a></Link>
          <Link href="/profile_client"><a style={{ textDecoration: 'none' }}><Typography sx={buttonSX}>Профиль</Typography></a></Link>
          <Link href="/profile_client"><a style={{ textDecoration: 'none' }}><Typography sx={buttonSX}>Расписание</Typography></a></Link>
          <Link href="/profile_client"><a style={{ textDecoration: 'none' }}><Typography sx={buttonSX}>Статистика</Typography></a></Link>
          <Link href="/profile_client"><a style={{ textDecoration: 'none' }}><Typography sx={buttonSX}>Терапия</Typography></a></Link>
          <Link href="/profile_client"><a style={{ textDecoration: 'none' }}><Typography sx={buttonSX}>Методы терапии</Typography></a></Link>

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
          display: { xs: 'block', md: 'none' }
        }}
      >
        <Typography sx={{ marginBottom: '30px' }}>Главная</Typography>
        <Typography sx={{ marginBottom: '30px' }}>Профиль</Typography>
        <Typography sx={{ marginBottom: '30px' }}>Расписание</Typography>
        <Typography sx={{ marginBottom: '30px' }}>Статистика</Typography>
        <Typography sx={{ marginBottom: '30px' }}>Терапия</Typography>
        <Typography sx={{ marginBottom: '30px' }}>Методы терапии</Typography>
      </Drawer>
    </Grid>
  );
};
export default DrawerCompClient;