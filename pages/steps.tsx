import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider } from '@mui/material'
import * as React from 'react';
import 'react-phone-input-2/lib/style.css'
import Radio from '@mui/material/Radio';
import { useRouter } from 'next/router';
import buttonM from '../components/Buttons/ButtonMedium';

export default function Steps() {
  const themeS = createTheme();
  const themeSmallText = createTheme();
  const radioButtonText = createTheme();

  const router = useRouter();

  themeS.typography.h3 = {
    fontFamily: 'RobotoThin',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '46px',
    marginBottom: '20px',
    fontSize: '14px'
  };

  themeS.typography.h4 = {
    fontSize: '20px',
    fontFamily: 'Roboto',
    color: '#4E4E4E'
  };

  themeSmallText.typography.h4 = {
    fontFamily: 'RobotoThin',
    fontSize: '14px'
  };

  radioButtonText.typography.h4 = {
    fontFamily: 'RobotoThin',
    fontSize: '20px',
    color: '#4E4E4E'
  };

  return (
    <Grid item sx={{ maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, height: 'auto' }}>
      <ResponsiveAppBar />
      <div className={styles.main}>
        <Grid sx={{ width: '100vw', height: '100%', backgroundColor: '#f9f7ff' }}>
          <Grid container columns={12} spacing={{ md: 4, xs: 0 }} sx={{ marginTop: '0 !important', maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, minHeight: '100%' }} >

            <Grid pt={{ xs: 4 }} pl={{ xs: '0 !important', md: 4 }} item xs={12} md={3} >
              <ThemeProvider theme={themeS}>
                <Typography variant='h3' sx={{ fontFamily: 'RobotoThin', fontWeight: 600, textAlign: 'center', marginTop: '46px', marginBottom: '20px', color: '#4E4E4E' }}>Шаг 1. Персональные данные</Typography>
              </ThemeProvider>
              <Grid item xs={12} sx={{ width: '100%', background: '#FFA630', height: '7px', borderRadius: '18px' }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{ xs: 0, md: 4 }} item xs={3} sx={{ display: { xs: 'none', md: 'block' } }} >
              <ThemeProvider theme={themeS}>
                <Typography sx={{ opacity: 0.5 }} variant='h3'>Шаг 2. Личные вопросы</Typography>
              </ThemeProvider>
              <Grid item sx={{ background: '#D9D9D9', height: '7px', width: '100%', borderRadius: '18px' }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{ xs: 0, md: 4 }} item xs={3} sx={{ display: { xs: 'none', md: 'block' } }} >
              <ThemeProvider theme={themeS}>
                <Typography sx={{ opacity: 0.5 }} variant='h3'>Шаг 3. Выбор специалиста</Typography>
              </ThemeProvider>
              <Grid item sx={{ background: '#D9D9D9', height: '7px', width: '100%', borderRadius: '18px' }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{ xs: 0, md: 4 }} item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}>
              <ThemeProvider theme={themeS}>
                <Typography sx={{ opacity: 0.5 }} variant='h3'>Шаг 4. Способ оплаты</Typography>
              </ThemeProvider>
              <Grid item sx={{ background: '#D9D9D9', height: '7px', width: '100%', borderRadius: '18px' }} />
            </Grid>

            <Grid xs={12} pt={{ xs: 4, md: '30px !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item pl={{ xs: '0 !important' }} xs={12} md={3} pt={{ xs: 0, md: '16px' }} sx={{ textAlign: { xs: 'center', md: 'start' }, mt: { xs: 4, md: 0 } }}>
                <ThemeProvider theme={themeS}>
                  <Typography variant='h4'>Как Вас зовут?</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item  pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <TextField sx={{
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    width: '270px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight:100,
                  }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
                }}
                  id="outlined-basic" label="" variant="outlined" />
                <ThemeProvider theme={themeSmallText}>
                  <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}>Как мы можем к Вам обращаться? Введите своё имя или псевдоним</Typography>
                </ThemeProvider>
              </Grid>
            </Grid>

            <Grid xs={12} pt={{ xs: 4, md: '40px !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <ThemeProvider theme={themeS}>
                  <Typography variant='h4'>Сколько Вам лет?</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <TextField   type="date" sx={{
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    width: '160px', borderRadius: '4px', paddingY: '0', paddingX: '10px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight:100,
                  }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
                }}
                  id="outlined-basic" label="" variant="outlined" />
                <ThemeProvider theme={themeSmallText}>
                  <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}>Для получения наших услуг Вы должны быть старше 16 лет</Typography>
                </ThemeProvider>
              </Grid>
            </Grid>

            <Grid item xs={12}  pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '40px !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h4'>E-mail</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }}  xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }} >
              <TextField sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: '55px',
                  width: '270px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight:100,
                }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
              }}
                id="outlined-basic" label="" variant="outlined" />
              <ThemeProvider theme={themeSmallText}>
                <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Radio style={{ paddingTop: 0, paddingBottom: 0 }} />Подписаться на новости и предложения</Typography>
              </ThemeProvider>
            </Grid>
            </Grid>


            <Grid item xs={12}  pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '40px !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h4'>Часовой пояс</Typography>
              </ThemeProvider>
            </Grid>

            <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }}  xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }} >
              <TextField sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: '55px',
                  width: '175px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight:100,
                }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
              }}
                id="outlined-basic" label="" variant="outlined" />
            </Grid>
            </Grid>

            <Grid item xs={12} pt={{ xs: 4, md: '40px !important' }}  pl={{ xs: '0 !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h4'>Сколько Вы готовы платить за сессию?</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }} >
              <TextField  sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: '55px',
                  width: '80px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight:100,
                }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
              }}
                id="outlined-basic" label="" variant="outlined" />
            </Grid>
            </Grid>


            <Grid item xs={12} pt={{ xs: 4, md: '40px !important' }}  pl={{ xs: '0 !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h4'>Был ли у Вас опыт терапии?</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }} >
              <TextField sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: '55px',
                  width: '80px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight:100,
                }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
              }}
                id="outlined-basic" label="" variant="outlined" />
            </Grid>
            </Grid>

            <Grid item xs={12} pt={{ xs: 4, md: '40px !important' }}  pl={{ xs: '0 !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h4'>Какая терапия Вам необходима?</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ alignSelf: { xs: 'center', md: 'start' } }} >
            <ThemeProvider theme={themeSmallText}>
              <Grid item sx={{display:'flex', flexDirection:'row'}}>
                <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Radio style={{ paddingTop: 0, paddingBottom: 0 }} />Личная</Typography>
                <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Radio style={{ paddingTop: 0, paddingBottom: 0 }} />Парная</Typography>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row'}}>
                <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Radio style={{ paddingTop: 0, paddingBottom: 0 }} />Ребенку</Typography>
                <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Radio style={{ paddingTop: 0, paddingBottom: 0 }} />Групповая</Typography>
                </Grid>
              </ThemeProvider>
            </Grid>
            </Grid>

            <Grid item xs={3} sx={{ paddingLeft: 0 }}>
            </Grid>
            <Grid item pt={{ xs: 4, md:'110px !important' }} pl={{ xs: 0, md: 4 }} pb={'40px'} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <ThemeProvider theme={buttonM}>
                <Button onClick={() => router.push('/steps2')}
                  variant="text">Шаг 2. Личные вопросы</Button>
              </ThemeProvider>
            </Grid>

          </Grid>
        </Grid>
        <Footer />
      </div>
    </Grid>
  );
}