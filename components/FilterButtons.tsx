import { Box, Typography, Button, Grid, ButtonGroup, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../styles/Home.module.css'

const h1 = createTheme();
  const button = createTheme();
  const button2 = createTheme();
  h1.typography.h1 = {
    [h1.breakpoints.only('xl')]: {
      fontSize: '48px',
    },
    [h1.breakpoints.only('lg')]: {
      fontSize: '48px',
    },
    [h1.breakpoints.only('md')]: {
      fontSize: '48px',
    },
    [h1.breakpoints.only('sm')]: {
      fontSize: '40px',
    },
    [h1.breakpoints.only('xs')]: {
      fontSize: '30px',
    },
  };

  button.typography.button = {
    position: 'absolute',
    fontFamily: 'Roboto',
    background:'linear-gradient(138.83deg, #514573 -8.57%, #BAA5FF 111.47%)',
    opacity: 0.3,
    textTransform: 'inherit',
    "&.MuiButton-text": {
      color: "#FFF",
    },
    "&.MuiButton-root": {
      borderRadius: '80px', 
    padding: '16px 26px',
    },
    [button.breakpoints.up('xs')]: {
      fontSize: '24px',
      height: '62px'
    },
  };

  button2.typography.button = {
    fontFamily: 'Roboto',
    background:'linear-gradient(138.83deg, #514573 -8.57%, #BAA5FF 111.47%)',
    opacity: 0.3,
    textTransform: 'inherit',
    "&.MuiButton-text": {
      color: "#FFF",
    },
    "&.MuiButton-root": {
      borderRadius: '80px', 
    padding: '16px 26px',
    },
    [button2.breakpoints.up('xs')]: {
      fontSize: '24px',

    },
  };
  

export default function FilterButtons() {
  function filterButtons(id: any) {
    switch (id) {
      case 1:
        alert('1');
        break;
      case 2:
        alert('2');
        break;
      case 3:
        alert('3');
        break;
      case 4:
        alert('4');
        break;
      case 5:
        alert('5');
        break;
      case 6:
        alert('6');
        break;
      case 7:
        alert('7');
        break;
      default:
        alert("Нет таких значений");
    }
  }
  return (
      <Grid paddingBottom={{  //100 padding bottom element
      xs: 10,
      md: 13,
      xl: 13
    }} m={0} spacing={{xs:0,md:4}} container xs={12} alignItems="center" justifyContent="center" display="flex">
        <Grid paddingBottom={{
          xs: 6,
          md: 8,
          xl: 9
        }} item xs={12} pt={0}>
          <ThemeProvider theme={h1}>
<Typography variant="h1" sx={{ fontFamily: 'Poppins', color: '#4E4E4E', textAlign: 'center' }}>Подберите специалиста,
            <span style={{ color: '#514573' }}><br /> который Вас услышит и поймет</span>
            </Typography>
            </ThemeProvider>
        </Grid>
        <Grid item>
          <Grid sx={{ position: 'relative', display:{xs:'none',md:'flex'} }}>
            <img src='filterbuttons.png' width='100%' height='100%' style={{ textAlign: 'center', marginRight: 0}} />
            <Typography sx={{  mt:{xl:'50px'}, fontSize: { xl: '50px', md: '40px', xs: '25px' },
              fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 500, color: '#4E4E4E',
              textAlign: 'center', position: 'absolute', top: 50, width: '100%'
            }}>Что вы хотели бы обсудить?</Typography>
              <ThemeProvider theme={button}>
              <CssBaseline />
            <Button sx={{top: '25%', left: '10%', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(1)}>Самооценка</Button>
            <Button sx={{ ml: { xl: 0, xs: '20px' }, top: '25%', left: '40%', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(2)}>Тревоги и страхи</Button>
            <Button sx={{ mt: { xl: 0, md: 0, sm: '20px' }, top: '40%', left: '20%', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(3)}>Депрессия</Button>
            <Button sx={{ mt: { xl: 0, md: 0, sm: '10px' }, top: '50%', left: '50%' }} onClick={() => filterButtons(4)}>Поиск себя</Button>
            <Button sx={{ mt: { xl: 0, md: 0, sm: '60px', xs: '60px' },top: '55%', left: '10%', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(5)}>Карьерная мотивация</Button>
            <Button sx={{ mt: { xl: 0, md: 0, sm: '30px', xs: '20px' },top: '75%', left: '10%', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(6)}>Эмоциональное выгорание</Button>
            <Button sx={{ mt: { xl: 0, md: 0, sm: '40px', xs: '30px' }, mr: { xs: '40px' }, top: '75%', left: '65%', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(7)}>Чувство тревоги</Button>
            <Button sx={{ mt: { xl: 0, md: 0, sm: '20px' },top: '37%', left: '60%', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(7)}>Отношения в семье</Button>
            </ThemeProvider>
          </Grid>

          <Grid sx={{ display:{xs:'flex',md:'none'}, flexDirection:'column' }}>
            <Typography sx={{  mt:{xl:'50px'}, fontSize: { xl: '50px', md: '40px', xs: '25px' },
              fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 500, color: '#4E4E4E',
              textAlign: 'center', width: '100%'
            }}>Что вы хотели бы обсудить?</Typography>
            <Grid item xs={12} sx={{display:'flex', flexDirection:'column'}}>
              <ThemeProvider theme={button2}>
              <CssBaseline />
            <Button sx={{mt: '20px',borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(1)}>Самооценка</Button>
            <Button sx={{mt: '20px', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(2)}>Тревоги и страхи</Button>
            <Button sx={{ mt: '20px', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(3)}>Депрессия</Button>
            <Button sx={{ mt: '20px'}} onClick={() => filterButtons(4)}>Поиск себя</Button>
            <Button sx={{ mt: '20px', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(5)}>Карьерная мотивация</Button>
            <Button sx={{ mt: '20px', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(6)}>Эмоциональное выгорание</Button>
            <Button sx={{ mt: '20px', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(7)}>Чувство тревоги</Button>
            <Button sx={{ mt: '20px', borderRadius: '80px',color:'#FFF', padding: '16px 26px 16px 26px' }} onClick={() => filterButtons(7)}>Отношения в семье</Button>
            </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}