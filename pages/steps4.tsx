import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider, Box } from '@mui/material'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/router';
import buttonM from '../components/Buttons/ButtonMedium'

export default function Steps4() {
  const theme = createTheme();
  const themeS = createTheme();
  const router = useRouter();

  themeS.typography.h3 = {
    fontFamily: 'RobotoThin',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '14px'
  };

  themeS.typography.h4 = {
    fontSize: '20px',
    fontFamily: 'Roboto',
    color: '#4E4E4E'
  };

  theme.typography.h1 = {
    [theme.breakpoints.only('xl')]: {
      fontSize: '64px',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '55px',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '50px',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '45px',
    },
  };

  return (
    <Grid item sx={{ maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, height: 'auto' }}>
      <ResponsiveAppBar />
      <div className={styles.main}>
        <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f9f7ff' }}>
          <Grid pb={'40px'} container columns={12} rowSpacing={{ xl: 10 }} sx={{ textAlign: { xs: 'center', minHeight: 'calc(100% - 70px - 81px)', width: '80%', marginLeft: '10%' } }}>
            <Grid pl={0} sx={{ display: { xs: 'none', md: 'block' }, position: 'relative' }} pt={{ xs: 4 }} item xs={3}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h3' sx={{ color: '#FFA630', fontFamily: 'RobotoThin', fontWeight: 600, textAlign: 'center', marginTop: '46px', marginBottom: '20px' }}>Шаг 1. Персональные данные</Typography>
              </ThemeProvider>
              <Grid item xs={12} sx={{ width: { xs: '100%', md: '90%' }, background: '#FFA630', height: '7px', borderRadius: '18px', position: 'absolute', bottom: 0 }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{ xs: 0, md: 4 }} item xs={3} sx={{ display: { xs: 'none', md: 'block' }, position: 'relative' }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h3' sx={{ color: '#FFA630', fontFamily: 'RobotoThin', fontWeight: 600, textAlign: 'center', marginTop: '46px', marginBottom: '20px' }}>Шаг 2. Личные вопросы</Typography>
              </ThemeProvider>
              <Grid item xs={12} sx={{ width: { xs: '100%', md: '90%' }, background: '#FFA630', height: '7px', borderRadius: '18px', position: 'absolute', bottom: 0 }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{ xs: 0, md: 4 }} item xs={3} sx={{ display: { xs: 'none', md: 'block' }, position: 'relative' }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h3' sx={{ color: '#FFA630', fontFamily: 'RobotoThin', fontWeight: 600, textAlign: 'center', marginTop: '46px', marginBottom: '20px' }}>Шаг 3. Выбор специалиста</Typography>
              </ThemeProvider>
              <Grid item xs={12} sx={{ width: { xs: '100%', md: '90%' }, background: '#FFA630', height: '7px', borderRadius: '18px', position: 'absolute', bottom: 0 }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{xs:'0 !important', md:'32px !important'}} item xs={12} md={3} sx={{ display:'block', position: 'relative' }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h3' sx={{ fontFamily: 'RobotoThin', fontWeight: 600, textAlign: 'center', marginBottom: '20px', marginTop: '46px' }}>Шаг 4. Способ оплаты</Typography>
              </ThemeProvider>
              <Grid item xs={12} sx={{ width: { xs: '100%', md: '90%' }, background: '#FFA630', height: '7px', borderRadius: '18px', position: 'absolute', bottom: 0 }} />
            </Grid>

            <Grid item xs={12} sx={{ paddingTop: '0 !important' }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h1" sx={{ mb: { xl: '98px', xs: '40px' }, mt: { xl: '58px', xs: '40px' }, color: '#514573', maxWidth: '100%', fontFamily: 'Poppins', fontWeight: '700', transform: 'scaleX(0.9)' }}>Добавить карту для оплаты
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={3} sx={{ display: { md: 'flex', xs: 'none' } }} />
            <Grid item xs={12} md={12} lg={6} sx={{ paddingTop: '0 !important' }}>
              <Box sx={{ paddingTop: '0 !important', width: '100%', background: '#FFA630', borderRadius: '40px', height: '396px', position: 'relative' }}>
                <Grid container sx={{paddingTop:'80px'}}>
                <Grid item xs={1} ></Grid>
                <Grid item xs={6} sx={{ borderBottom: '5px solid #fff !important', position: 'relative', ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": { color: '#fff', fontFamily: 'RobotoLight', fontSize: '24px', paddingY:'0' } }}>
                  <TextField sx={{ width: '100%', ".MuiOutlinedInput-notchedOutline": { border: '0 !important' }}} placeholder='Номер карты'>dsdsdsd</TextField>
                </Grid>
                <Grid item xs={1} sx={{position:' relative', marginBlock:'auto'}}>
                <Grid sx={{ width: { xs: '50px !important' }, transform: 'rotate(-45deg)', background: '#FFFFFF', height: '5px', borderRadius: '5px', position: 'absolute' }}/>
                  </Grid> 
                <Grid item xs={3} sx={{ borderBottom: '5px solid #fff !important', position: 'relative', ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": { color: '#fff', fontFamily: 'RobotoLight', fontSize: '20px', paddingY:'0' } }}>
                  <TextField sx={{ width: '100%', ".MuiOutlinedInput-notchedOutline": { border: '0 !important' }}} type='date'>dsdsdsd</TextField>
                </Grid>
                </Grid>
                <Grid container sx={{paddingTop:'100px'}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={6} sx={{ borderBottom: '5px solid #fff !important', position: 'relative', ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": { color: '#fff', fontFamily: 'RobotoLight', fontSize: '24px', paddingY:'0' } }}>
                  <TextField sx={{ width: '100%', ".MuiOutlinedInput-notchedOutline": { border: '0 !important' }}} placeholder='Имя и фамилия'>dsdsdsd</TextField>
                </Grid>
                <Grid item xs={1} sx={{position:' relative', marginBlock:'auto'}}>
                <Grid sx={{ width: { xs: '50px !important' }, transform: 'rotate(-45deg)', background: '#FFFFFF', height: '5px', borderRadius: '5px', position: 'absolute' }}/>
                  </Grid> 
                <Grid item xs={3} sx={{ borderBottom: '5px solid #fff !important', position: 'relative', ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": { color: '#fff', fontFamily: 'RobotoLight', fontSize: '24px', paddingY:'0' } }}>
                  <TextField sx={{ width: '100%', ".MuiOutlinedInput-notchedOutline": { border: '0 !important' }}} placeholder='CVV'>dsdsdsd</TextField>
                </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={3} sx={{ display: { md: 'flex', xs: 'none' } }} />
            <Grid  item xs={12} pt={{xs:'30px !important', md:'90px !important'}} pb={'49px'}  sx={{textAlign:'center'}}>
    <ThemeProvider theme={buttonM}>
        <Button onClick={()=>router.push('/steps4')} 
          variant="text">Добавить карту</Button>
          </ThemeProvider>
           </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </Grid>
  );
}