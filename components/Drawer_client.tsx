import { Grid, Typography, Drawer, Box, IconButton, createTheme, ThemeProvider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'


const drawerWidth = 240;
const buttonSX = {
  font: 'Roboto',
  fontSize: '20px',
  color: '#4E4E4E',
  padding: '15px 29px',
  whiteSpace: 'nowrap',
  "&:hover": {
    color: "#FFA630",
    backgroundColor: 'rgba(255, 166, 48, 0.26)',
    border: '1px solid #FFA630',
    borderRadius: '96px',
    padding: '14px 29px',
  },
};
const A = styled.a`
  textDecoration: 'none'
  `;

const Typo = createTheme();

Typo.typography.h4 = {
  marginBottom: '30px',
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
          <Link href="/profile_client"><A><Typography sx={buttonSX}>Информация</Typography></A></Link>
          <Link href="/profile_client/calendar"><A><Typography sx={buttonSX}>Расписание</Typography></A></Link>
          <Link href="/profile_client"><A><Typography sx={buttonSX}>Статистика</Typography></A></Link>
          <Link href="/profile_client/one"><A><Typography sx={buttonSX}>Личная терапия</Typography></A></Link>
          <Link href="/profile_client/pair"><A><Typography sx={buttonSX}>Парная терапия</Typography></A></Link>
          <Link href="/profile_client/group"><A><Typography sx={buttonSX}>Групповая терапия</Typography></A></Link>
          <Link href="/profile_client/payment"><A><Typography sx={buttonSX}>Способы оплаты</Typography></A></Link>
          <Link href="/profile_client"><A><Typography sx={buttonSX}>Методы терапии</Typography></A></Link>

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
        <ThemeProvider theme={Typo}>
          <Typography>Информация</Typography>
          <Typography>Расписание</Typography>
          <Typography>Статистика</Typography>
          <Typography>Личная терапия</Typography>
          <Typography>Парная терапии</Typography>
          <Typography>Групповая терапии</Typography>
          <Typography>Способы оплаты</Typography>
          <Typography>Методы терапии</Typography>
        </ThemeProvider>
      </Drawer>
    </Grid>
  );
};
export default DrawerCompClient;