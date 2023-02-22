import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material';
import buttonS from './Buttons/ButtonSmall'
import { useRouter } from 'next/router';

const pages = ['Для психологов', 'Для бизнеса', 'Подарочные сертификаты', 'Магазин', 'Акции', 'Блог'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [buttonName, changebuttonName] = React.useState('Регистрация');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();

  return (
    <AppBar position="static" style={{ background: '#FFF', boxShadow: 'none', marginTop:0, width:'100%', paddingBottom: 0, height: '70px'}}>
      <Container style={{paddingLeft:0, paddingRight:0, maxWidth:'none'}}>
        <Toolbar disableGutters>

          <img src='Logo.png' alt='logo' width='30px' height='53px' style={{marginTop:'auto',marginBottom:'auto', marginRight:'22px'}} 
          onClick={()=>router.push('/')}/>
          <Typography  onClick={()=>router.push('/')} sx={{ fontSize: { xs:'20px', md: '26px' }, mr: {xl:'34px', md: '20px'} }} variant="h1" style={{ color:'#4E4E4E', 
          fontFamily:'Comfortaa', fontWeight:600, fontStyle:'normal', hyphens:'auto', transform: 'scaleX(1)', letterSpacing:'2px'}}>MeetMind</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{fontSize: { md:'10px', lg:'14px', xl:'14px'}, my: 2, color: '#4E4E4E', display: 'block', mr:{xl:'34px', md:'20px'}, textTransform: 'none', fontFamily: 'Roboto', px:0 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <ThemeProvider theme={buttonS}>
          <Button  onClick={()=>router.push('/registration')}>{buttonName}</Button>
          </ThemeProvider>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;