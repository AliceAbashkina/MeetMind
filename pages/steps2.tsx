import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider } from '@mui/material'
import * as React from 'react';
import 'react-phone-input-2/lib/style.css'
import Radio from '@mui/material/Radio';
import { useRouter } from 'next/router';
import buttonM from '../components/Buttons/ButtonMedium';


export default function Steps2() {
  const themeS = createTheme();
  const themeSmallText = createTheme();
  const router = useRouter();

  themeS.typography.h3 = {
    fontFamily:'RobotoThin', 
    fontWeight:600, 
    textAlign:'center', 
    marginTop:'46px', 
    marginBottom:'20px',
    fontSize: '14px'
  };

  themeSmallText.typography.h4 = {
    
    fontFamily: 'RobotoThin',
    color:'background: #4E4E4E',
    minWidth:'max-content',
    opacity:'0.5',
    [themeSmallText.breakpoints.up('xs')]: {
      fontSize: '14px',
    },
    [themeSmallText.breakpoints.up('xl')]: {
      fontSize: '14px',
    },
  };
    return(
<Grid item sx={{ maxWidth: {lg:'80%', xs:'calc(100% - 40px)',xl:'1440px'}, marginLeft:{xs:'20px', lg:'10%', xl:'auto'}, marginRight:{xs:'20px', lg:'10%',xl:'auto'}, height: 'auto'}}>
<ResponsiveAppBar />
      <div className={styles.main}>
        <Grid sx={{width:'100vw', minHeight:'100vh', backgroundColor: '#f9f7ff'}}>
        <Grid  container columns={12} spacing={{xs:4}} sx={{ marginTop:'0 !important', maxWidth: {lg:'80%', xs:'calc(100% - 40px)',xl:'1440px'}, marginLeft:{xs:'20px', lg:'10%', xl:'auto'}, marginRight:{xs:'20px', lg:'10%',xl:'auto'},minHeight:'calc(100vh - 70px - 81px)'}} >
        
        <Grid pt={{xs:4}} pl={{xs:'0 !important', md:4}} sx={{display:{xs:'none', md:'block'}}} item  xs={12}  md={3}>
        <ThemeProvider theme={themeS}>
          <Typography variant='h3' sx={{fontFamily:'RobotoThin', fontWeight:600, textAlign:'center', marginTop:'46px', marginBottom:'20px', color:'#FFA630'}}>Шаг 1. Персональные данные</Typography>
          </ThemeProvider>
          <Grid item xs={12} sx={{width:'100%', background:'#FFA630', height:'7px', borderRadius:'18px'}}/>
                  </Grid>
        <Grid pt={{ xs: 4 }} pl={{ xs: '0 !important', md: '32px !important'}} item xs={12} md={3} >
        <ThemeProvider theme={themeS}>
          <Typography variant='h3'>Шаг 2. Личные вопросы</Typography>
          </ThemeProvider>
        <Grid sx={{background:'#FFA630', height:'7px', width:'100%', borderRadius:'18px'}}/>
        </Grid>
        <Grid pt={{xs:4}} pl={{xs:0,md:'32px !important'}} item xs={3} sx={{display:{xs:'none', md:'block'}}} >
        <ThemeProvider theme={themeS}>
          <Typography sx={{opacity: '0.5'}} variant='h3'>Шаг 3. Выбор специалиста</Typography>
          </ThemeProvider>
        <Grid sx={{background:'#D9D9D9', height:'7px', width:'100%', borderRadius:'18px'}}/>
        </Grid>
        <Grid pt={{xs:4}} pl={{xs:0,md:4}} item xs={3} sx={{display:{xs:'none', md:'block'}}}>
        <ThemeProvider theme={themeS}>
          <Typography sx={{opacity: '0.5'}} variant='h3'>Шаг 4. Способ оплаты</Typography>
          </ThemeProvider>
        <Grid sx={{background:'#D9D9D9', height:'7px', width:'100%', borderRadius:'18px'}}/>
      </Grid>

      <Grid item sx={{display:{xs:'none',md:'flex'}}} xs={2}> </Grid>
      <Grid  item xs={12} sm={4} pt={{md:'40px! important'}} pl={{xs:'0 !important',lg:'4 !important'}}>
    <Typography >Что Вас больше всего беспокоит?</Typography>
    <Grid sx={{minWidth:'maxContent', display:'flex', flexDirection:{xs:'column', lg:'row'}}}>
<div>
<ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'> <Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </div>
    <Grid sx={{paddingLeft:{lg:4, xs:0}}} >
    <ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    </Grid>

    <Grid item xs={1}> </Grid>
    <Grid item xs={12} sm={4} pt={{md:'40px! important'}} pl={{xs:'0 !important',lg:'4 !important'}}>
    <Typography>События в жизни</Typography>
    <Grid sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}}}>
<div>
<ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </div>
    <Grid sx={{paddingLeft:{lg:'32px', xs:0}}}>
    <ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    </Grid>

    <Grid item xs={2}> </Grid>
      <Grid item xs={12} sm={4} pl={{xs:'0 !important',lg:'4 !important'}}>
    <Typography>Отношения</Typography>
    <Grid sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}}}>
<div>
<ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </div>
    <Grid sx={{paddingLeft:{lg:'32px', xs:0}}}>
    <ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    </Grid>

    <Grid item xs={1}> </Grid>
      <Grid item xs={12} sm={4} pl={{xs:'0 !important',lg:'4 !important'}}>
    <Typography>Парная терапия</Typography>
    <Grid sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}}}>
<div>
<ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </div>
    <Grid sx={{paddingLeft:{lg:'32px', xs:0}}}>
    <ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    </Grid>

    <Grid sx={{paddingLeft:0}} item xs={2}> </Grid>
      <Grid item xs={12} sm={4} pl={{xs:'0 !important',lg:'4 !important'}}>
    <Typography>Работа, учеба</Typography>
    <Grid sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}}}>
<div>
<ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </div>
    <Grid sx={{paddingLeft:{lg:'32px', xs:0}}}>
    <ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    </Grid>

    <Grid item xs={1}> </Grid>
      <Grid item xs={12} sm={4} pl={{xs:'0 !important',lg:'4 !important'}}>
    <Typography>Парная терапия</Typography>
    <Grid sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}}}>
<div>
<ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </div>
    <Grid sx={{paddingLeft:{lg:'32px', xs:0}}}>
    <ThemeProvider theme={themeSmallText}>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    <Typography variant='h4'><Radio />Вариант ответа</Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    </Grid>

<Grid sx={{paddingLeft:0}} item xs={2}></Grid>

    <Grid pt={{md:'63px! important'}} pl={{xs:'0 !important',lg:'4 !important'}}  pb={'40px'} item xs={12} md={9}  sx={{textAlign:{xs:'center', md:'start'}}}>
    <ThemeProvider theme={buttonM}>
        <Button onClick={()=>router.push('/steps3')} 
          variant="text">Шаг 3. Выбор специалиста</Button>
          </ThemeProvider>
           </Grid>

</Grid>

        </Grid>
      <Footer />
    </div>
    </Grid>
    );
}