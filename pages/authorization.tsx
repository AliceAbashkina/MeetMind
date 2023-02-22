import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

import { IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import buttonM from '../components/Buttons/ButtonMedium';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header1 from '../components/Headers/Header1';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function Authorization() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [value, setValue] = useState<string | undefined>();
  const [active, setActive] = useState(false);
  const [textAuto, setTextAuto] = useState("Введите свой номер телефона")
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  function handleChangePassword(event: any) {
    setPassword(event.target.value)
  }
  const router = useRouter()


  function setTelephone(newValue: string): void {
    setValue(newValue);   
    setActive(true);
  }

  function clickButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    callAPI().then(data => {
  }).catch(err => {
      console.log(err);
  });    
}

async function callAPI() {
  let User={
    phone: value,
    password: password,
  };
  console.log(User)
  const response = await fetch('http://89.110.53.157:19525/v1/login',   {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(User),
  });
  const json = await response.json();
  if(json.message=="Неверный логин или пароль"){
    setTextAuto("Неверный логин или пароль")
  }
  else{
    setTextAuto("Успешно!")
    router.push('/')
  }
console.log(json)
  return json;
}
    return(
<Grid item sx={{ maxWidth: {lg:'80%', xs:'calc(100% - 40px)',xl:'1440px'}, marginLeft:{xs:'20px', lg:'10%', xl:'auto'}, marginRight:{xs:'20px', lg:'10%',xl:'auto'}, height: 'auto'}}>
<ResponsiveAppBar />
      <div className={styles.main}>
      <Grid sx={{width:'100vw', backgroundColor: '#f9f7ff', height: '100%'}}>
        <Grid container columns={12} spacing={{md:4,xs:0}} sx={{marginTop:'0 !important', maxWidth: {lg:'80%', xs:'calc(100% - 40px)',xl:'1440px'}, marginLeft:{xs:'20px', lg:'10%', xl:'auto'}, marginRight:{xs:'20px', lg:'10%',xl:'auto'},minHeight:'calc(100vh - 70px - 81px)'}}>
        <Grid item xs={1} sx={{display:{xs:'none',md:'flex'}, paddingLeft:'0 !important', paddingTop:'0 !important'}}/>
          <Grid item xs={11} sx={{paddingTop:'0 !important'}}>
          <ThemeProvider theme={Header1}>
            <Typography variant='h2' sx={{marginTop:{md:'86px',xs:0}, marginBottom:{md:'66px',xs:2}, textAlign:'left'}}>Авторизоваться
            </Typography>
            </ThemeProvider>          </Grid>
          <Grid item xs={1} sx={{display:{xs:'none',md:'flex'}, paddingLeft:'0 !important'}}/>
          <Grid item md={5} xs={12} sx={{paddingTop: 0, alignSelf:'start'}} mb={{xs:0, md:'40px'}}>
          
            <Typography sx={{ fontSize: { xl: '35px', xs:'20px' },marginBottom: '30px' }}>{textAuto}</Typography>
            <PhoneInput regions={['ex-ussr']} containerStyle={{opacity:1}} buttonClass={styles.buttonClassInput} inputStyle={{ backgroundColor: '#f9f7ff', border: '1px solid #FFA630', borderRadius: '30px', height: '55px', fontSize:'1.2rem' }} placeholder='телефон' preferredCountries={['ru']}
            value={value}
            onChange={(newValue) => setTelephone(newValue)}
            inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }} />
              <Grid item sx={{marginTop:'30px'}}>
             <OutlinedInput sx={{
                    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                      height: '55px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
                    }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #FFA630 !important', borderRadius: '59px' },
                  }} placeholder="Пароль" value={password}
                    onChange={(event) => handleChangePassword(event)} 
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={(event)=>handleMouseDownPassword(event)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    type={showPassword ? 'text' : 'password'}
                    id="outlined-basic" label="" />
                    </Grid>
            <ThemeProvider theme={buttonM}>
            <Button sx={{marginTop:'30px', marginBottom:'50px'}} disabled={!active} onClick={(event) => { clickButton(event) }}>
              Авторизоваться</Button>
              </ThemeProvider>
          </Grid>
          <Grid  item xs={1} sx={{ display: { xs: 'none', md: 'flex' }, paddingTop: 0 }}></Grid>
          <Grid  item md={4}  xs={12} sx={{order:{xs:-1, md:0}, pb:{xs:'50px', md:0},textAlign: 'center'}}>
            <Grid sx={{maxWidth:{xs:'353px', md:'100%'}, textAlign:{xs:'center',md:'start'}, display:'flex', paddingTop:{md:0, xs:'60px'}}}><img src='reg.png' style={{maxWidth:'353px'}} width="100%" /></Grid></Grid>
          <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'flex' } }}></Grid>
        </Grid>
        </Grid>
        <Footer />
      </div>
    </Grid>
    );
}
function changebuttonName(arg0: string) {
  throw new Error('Function not implemented.');
}

