import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FilterButtons from '../components/FilterButtons';
import Avatar from "@material-ui/core/Avatar";
import styles from '../styles/Home.module.css';
import buttonL from '../components/Buttons/ButtonLarge';
import Header2 from '../components/Headers/Header2';
import { useRouter } from 'next/router';

export default function Main() {
  
  const theme = createTheme();

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
  const router = useRouter();
  return (
    <Box > 
      <Grid container spacing={4} pt={5} sx={{display:'flex', flexDirection: { xs: "column-reverse", md: "row"}, 
      textAlign: {xs: 'center', xl:'left', md:'left'}, minWidth:'100%' }}   alignItems="center" justifyContent="center" display="flex" 
      paddingBottom={{  //100 padding bottom element
      xs: 10,
      md: 13,
      xl: 13
    }}>

        <Grid item md={6} xs={12} >
        <ThemeProvider theme={theme}>
          <Typography  variant="h1" sx={{mb:{xl:'80px', xs:'40px'}, mt:{xl:0, xs:'40px'}, color:'#514573', maxWidth:'100%', fontFamily:'Poppins', fontWeight:'700', transform:'scaleX(0.9)'}}>Персональный
психолог 
<span style={{color:'#4E4E4E'}}><br/> здесь и сейчас</span>
        </Typography>
        </ThemeProvider>
        <ThemeProvider theme={buttonL}>
          <Button onClick={()=>router.push('/middle_page')} sx={{ml: {xs:0, md:'5%', xl:'5%'}}}  
          variant="text">Выбрать специалиста</Button>
          </ThemeProvider>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src='Portraits.png' width='100%' alt='main-img' style={{maxWidth:'538px'}} />
        </Grid>
      </Grid>


      <Grid container spacing={4} paddingBottom={{ //200 padding bottom element
      xs: 15,
      md: 15,
      xl: 25
    }}  alignItems="center" justifyContent="center" display="flex">
  <Grid item xs={12} sx={{textAlign:'center'}}>
    <img src='Frame8.png' width='100%' alt='main-img'/> 
  </Grid>
</Grid>

<Grid container spacing={4}
paddingBottom={{ //200 padding bottom element
  xs: 15,
      md: 15,
      xl: 25
}}
 columns={12} rowSpacing={{ xl: '70px', sm: '30px', md: 3, xs:6 }} alignItems="center" justifyContent="center" sx={{ minHeight: '100%'}} display="flex" >
<Grid sx={{pl:{xl:0, md:'30px'}}} item xs={12}>
<ThemeProvider theme={Header2}>
<Typography  variant="h2"
sx={{marginBottom:'46px'}}>
  <span style={{color:'#FFA630'}}>Ваше здоровье дороже золота</span><br/> М сделаем Вашу жизнь счастливой </Typography>  
  </ThemeProvider>
  </Grid>
  <Grid item xs={12} md={4} sx={{textAlign:'center', alignSelf:'start'}}>
    <img src='card1.png' width='100%' alt='main-img' style={{border: '1px solid #E2D6FF', boxShadow: '4px 4px 10px rgba(226, 214, 255, 0.5)', borderRadius: '80px', maxWidth:'350px'}} />
    <Typography sx={{fontSize:'22px', fontFamily:'RobotoLight', fontWeight:600}} mt={'30px'}>Наладить гармоничные отношения с близкими людьми</Typography>
  </Grid>
  <Grid item xs={12} md={4} sx={{textAlign:'center', alignSelf:'start'}}>
    <img src='card2.png' width='100%' alt='main-img' style={{ border: '1px solid #E2D6FF', boxShadow: '4px 4px 10px rgba(226, 214, 255, 0.5)', borderRadius: '80px', maxWidth:'350px'}} />
    <Typography sx={{fontSize:'22px', fontFamily:'RobotoLight', fontWeight:600}} mt={'30px'}>Найти свое призвание и начать заниматься любимым делом</Typography>
  </Grid>
  <Grid item xs={12} md={4} sx={{textAlign:'center', alignSelf:'start'}}>
    <img src='card3.png' width='100%' alt='main-img' style={{border: '1px solid #E2D6FF', boxShadow: '4px 4px 10px rgba(226, 214, 255, 0.5)', borderRadius: '80px', maxWidth:'350px'}} />
    <Typography sx={{fontSize:'22px', fontFamily:'RobotoLight', fontWeight:600}} mt={'30px'}> Справиться с тревогой
и почувствовать спокойствие</Typography>
  </Grid>
  <Grid item xs={12} md={4} sx={{textAlign:'center', alignSelf:'start'}}>
    <img src='card4.png' width='100%'  alt='main-img' style={{border: '1px solid #E2D6FF', boxShadow: '4px 4px 10px rgba(226, 214, 255, 0.5)', borderRadius: '80px', maxWidth:'350px'}} />
    <Typography sx={{fontSize:'22px', fontFamily:'RobotoLight', fontWeight:600}} mt={'30px'}>Стать единым целым 
с душой и телом</Typography>
  </Grid>
  <Grid item xs={12} md={4} sx={{textAlign:'center', alignSelf:'start'}}>
    <img src='card5.png' width='100%' alt='main-img' style={{border: '1px solid #E2D6FF', boxShadow: '4px 4px 10px rgba(226, 214, 255, 0.5)', borderRadius: '80px', maxWidth:'350px'}} />
    <Typography sx={{fontSize:'22px', fontFamily:'RobotoLight', fontWeight:600}} mt={'30px'}>Видеть жизнь под другим углом,
более оптимистично и ясно</Typography>
  </Grid>
  <Grid item xs={12} md={4} sx={{textAlign:'center', alignSelf:'start'}}>
    <img src='card6.png' width='100%' alt='main-img' style={{border: '1px solid #E2D6FF', boxShadow: '4px 4px 10px rgba(226, 214, 255, 0.5)', borderRadius: '80px', maxWidth:'350px'}} />
    <Typography sx={{fontSize:'22px', fontFamily:'RobotoLight', fontWeight:600}} mt={'30px'}>Почувствовать легкость
и перестать прокрастинировать </Typography>
  </Grid>
</Grid>

<FilterButtons />

      <Grid paddingBottom={{ 
      xs: 16,
      md: 14,
      sm: 12,
      xl: 12
      }}
        paddingTop={{
          xs: 16,
          md: 14,
          sm: 12,
          xl: 12
        }} 
        container sx={{ backgroundColor: '#f9f7ff', width:'auto', boxSizing: 'border-box', columnGap: '30px', margin: '0 calc((100vw - 100%) / -2)'}} >
        <Grid container xs={12} alignItems="center" columns={12} spacing={{xs:0,md:4}} justifyContent="center" display="flex"  sx={{ maxWidth: {lg:'80%', xs:'calc(100% - 40px)',xl:'1440px'}, 
        marginLeft:{xs:'20px', lg:'10%', xl:'auto'}, marginRight:{xs:'20px', lg:'10%',xl:'auto'}}}> 
        <Grid
          item xs={12} >
            <ThemeProvider theme={Header2}>  
          <Typography variant="h2"
            sx={{ marginBottom: '40px' }}>
            Отбираем только профессиональных психологов и проверяем этики</Typography>
            </ThemeProvider>
        </Grid>
       
        <Grid item xs={12} lg={3} sx={{  textAlign:'center'}}>
          <img src='cardPsy2.png' width='100%' style={{ maxWidth: '350px' }} />
        </Grid>
        <Grid item xs={12} lg={3} sx={{  textAlign:'center'}}>
          <img src='cardPsy.png' width='100%' style={{ maxWidth: '350px' }} />
        </Grid>
        <Grid item xs={12} lg={3} sx={{  textAlign:'center' }}>
          <img src='cardPsy3.png' width='100%' style={{ maxWidth: '350px' }} />
        </Grid>
        </Grid>
      </Grid>

      <Grid paddingBottom={{
        xs: 10,
        md: 14,
        sm: 12,
        xl: '211px'
      }} my={0}
      paddingTop={{
        xs: 1,
        md: 14,
        sm: 15,
        xl: '108px'
      }}
      container spacing={4} alignItems="start" justifyContent="center" display="flex" >
        <Grid
          item xs={12} sx={{ paddingTop: '0 !important'}}>
              <ThemeProvider theme={Header2}> 
          <Typography variant="h2" sx={{ paddingBottom: {md:'111px', xs:3}}}>
            MeetMind - <span style={{ color: '#514573' }}>сервис меняющий жизнь</span></Typography></ThemeProvider>
        </Grid>
        <Grid item xs={1} sx={{display:{xs:'none', md:'flex'}}} />
        <Grid mb={{xs:'40px', md:0}} pl={{xs:0,md:3}} item xs={12} md={3} sx={{ justifyContent: 'center', display: 'flex' }}>
          <img src='portrait.png' width='100%' height='100%' style={{ maxWidth: '270px' }} />
        </Grid>

        <Grid item xs={1} sx={{display:{xs:'none', lg:'flex'}, justifyContent:'center'}}>
        <img src='kav.png' width='34px' height='26px' />
        </Grid>

        <Grid item xs={12} lg={6} sx={{ paddingTop: 0, display: 'flex',
          flexDirection: 'row', columnGap: '38px', fontSize: '20px', color: '#4E4E4E', lineHeight: '32px'
        }}>
         
          <Grid sx={{display:'flex', flexDirection:'column'}}>
          <Typography sx={{ maxWidth: { lg: '540px', xs: '90%' }, fontFamily: 'RobotoThin', fontSize: '20px', fontWeight:600, marginBottom:'30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Neque, quis leo molestie ac id non pharetra blandit massa. In non at sodales aliquet fermentum accumsan, vitae vitae lorem. 
          Sed etiam sed vitae sollicitudin. Massa quis vitae commodo nulla nunc. Euismod hendrerit ut leo sit sed adipiscing tortor. 
          Placerat cursus tincidunt mattis elementum magna ut sed. </Typography>
          <Grid item sx={{flexDirection:{xs:'column', md:'row'}, display:'flex', alignItems:'center'}}>
          <Button variant="contained" size='large' sx={{height:'88px', borderRadius:'80px', backgroundColor:'#514573', padding:'16px 24px', width: '276px', marginRight:'30px', textAlign:'left'}} 
          startIcon={<Avatar src={'button_portrait4.png'} style={{width:'56px', height:'56px', textAlignLast:'left'}} />}><span style={{textTransform:'none'}}>Сергей Иванов
          <br/><span style={{opacity: '0.7', fontWeight:'100'}}>Маркетолог</span></span></Button>
          <Grid item mt={{xs:4, md:0}} sx={{display:'flex',flexDirection:{xs:'corowlumn', md:'row'}}}>
          <img src='button_portrait3.png' height='56' style={{marginRight:'30px'}}/>
          <img src='button_portrait2.png' height='56' style={{marginRight:'30px'}}/>
          <img src='button_portrait1.png' height='56' style={{marginRight:'30px'}}/>
          </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Grid>

      <Grid paddingBottom={{
        xs: 10,
        md: 14,
        sm: 12,
        xl: '120px'
      }} my={0} container spacing={4} alignItems="center" justifyContent="center" display="flex" sx={{ placeItems:{lg:'start', xs:'center'}}} >
        <Grid
          item xs={12} sx={{ paddingTop: 0 }}>
              <ThemeProvider theme={Header2}>
          <Typography variant="h2" sx={{ paddingBottom: {md:'111px', xs:3} }}>Почему именно <span style={{ color: '#FFA630' }}>MeetMind?</span></Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={1} sx={{display:{xs:'none', md:'flex'}}} />
         <Grid item xs={12} lg={3} sx={{paddingLeft:0, paddingTop: '0 !important', textAlign:{lg:'start',xs:'center'} }}>
          <img src='portrait_women1.png' width='100%' height='100%' style={{ maxWidth: '255px' }} />
        </Grid>
        <Grid item xs={1} sx={{display:{xs:'none', lg:'flex'}, justifyContent:'center'}}>
        <img src='kav.png' width='34px' height='26px' />
        </Grid>
        <Grid mt={{ lg: 0, xs: '40px' }} item xs={12} lg={7} sx={{ display: 'flex', flexDirection: 'row', columnGap: '38px' }}>
          <Grid sx={{ maxWidth: { lg: '540px', xs: '90%' }, fontFamily: 'RobotoThin', fontSize: '20px', color:'#4E4E4E', fontWeight:600 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, quis leo molestie ac id non pharetra blandit massa. In non at sodales aliquet fermentum accumsan, vitae vitae lorem. Sed etiam sed vitae sollicitudin. Massa quis vitae commodo nulla nunc. Euismod hendrerit ut leo sit sed adipiscing tortor. 
          Placerat cursus tincidunt mattis elementum magna ut sed.
          <Typography sx={{fontSize:'20px', fontFamily:'Roboto', fontWeight:100, marginTop:'30px'}}>Ольга Иванова</Typography>
          <Typography sx={{fontSize:'14px', opacity:'70%'}}>основатель MeetMind и психолог</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid mb={{
        xs: 16,
        md: 14,
        sm: 12,
        xl: '165px'
      }} container  my={0} spacing={4} alignItems="center" justifyContent="center" display="flex" sx={{ flexDirection: { lg: 'row', xs: 'column-reverse' }, placeItems:{lg:'start', xs:'center'} }}>
         <Grid item xs={1} sx={{display:{xs:'none', lg:'flex'}, justifyContent:'center'}}>
        <img src='kav.png' width='34px' height='26px' />
        </Grid>
        <Grid mt={{ lg: 0, xs: '40px' }} item xs={12} lg={5} sx={{ paddingTop: 0, display: 'flex', columnGap: '38px' }}>
          <Grid sx={{ maxWidth: { lg: '540px', xs: '90%' }, fontFamily: 'RobotoThin', fontSize: '20px', color:'#4E4E4E', fontWeight:600 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Neque, quis leo molestie ac id non pharetra blandit massa. In non at sodales aliquet fermentum accumsan, vitae vitae lorem. Sed etiam sed vitae sollicitudin. 
          Massa quis vitae commodo nulla nunc. Euismod hendrerit ut leo sit sed adipiscing tortor. Placerat cursus tincidunt mattis elementum magna ut sed.
          <Typography sx={{fontSize:'20px', fontFamily:'Roboto', fontWeight:100, marginTop:'30px'}}>Семен Морозов</Typography>
          <Typography sx={{fontSize:'14px', opacity:'70%'}}>основатель MeetMind и психолог</Typography>
          </Grid>
        </Grid>
        
        <Grid item xs={12} lg={3} sx={{paddingLeft:0, paddingTop: '0 !important', textAlign:{md:'start',xs:'center'} }}>
          <img src='portrait_man1.png' width='100%' height='100%' style={{ maxWidth: '255px' }} />
        </Grid>
      </Grid>
      

      <Grid  paddingBottom={{
        xs: 16,
        md: 14,
        sm: 12,
        xl: 16
      }} container  alignItems="center" justifyContent="center" display="flex" sx={{
        columnGap: '55px', background: 'url(last-img.png) center no-repeat, linear-gradient(139.51deg, #feefdc -13.62%, #fbf8f8 81.97%)', backgroundSize:'contain', width:'auto', 
        margin: '0 calc((100vw - 100%) / -2)', boxSizing: 'border-box'}}>
        <Grid
          marginTop={{
            xs: 16,
            md: 14,
            sm: 12,
            xl: 12
          }}

          item xs={12} sx={{ paddingLeft: 0, paddingTop: 0, textAlign: 'center' }}>
             <ThemeProvider theme={theme}>
          <Typography variant="h1" sx={{ fontFamily: 'Poppins', color: '#514573', maxWidth: '1032px', marginLeft: 'auto', marginRight: 'auto', marginBottom:'70px' }}>Не знаете с чего начать?
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={buttonL}>
          <Button onClick={()=>router.push('/middle_page')} variant="text">Выбрать специалиста</Button>
          </ThemeProvider>
        </Grid>
        
      </Grid>
</Box>
  );
}
