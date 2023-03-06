import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useRouter} from 'next/router'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header1 from '../components/Headers/Header1';
import buttonM from '../components/Buttons/ButtonMedium';
import { useState } from 'react';

export default function Registration() {

  const [value, setValue] = useState<string | undefined>();
  const [type, setType] = useState(0);
  const [code, setCode] = useState();
  const [active, setActive] = useState(false);
  const router = useRouter()


  function buttonVerify(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    router.push('/verify');
  }
  function setTelephone(newValue: string): void {
    setValue(newValue);   
    setActive(true);
  }

  function clickButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, typePers: any){
    const buffType = type+1;
    setType(typePers);
    console.log(type)
    callAPI(typePers).then(data => {
      setCode(data.confirmationCode);
      setTimeout(() => {
      router.push({
        pathname: '/verify',
        query: { type: typePers, code: data.confirmationCode, telephone: value, id: data.user_id }}, '/verify')
      }, 500);
  }).catch(err => {
      console.log(err);
  });    
}

async function callAPI(typePers) {
  let User={
    phone: value,
    type: typePers,
  };
  const response = await fetch('http://89.110.53.157:19525/v1/userSendVerifySMS',   {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(User),
  });
  const json = await response.json();
console.log(json)
  return json;
}

  return (
    <Grid item sx={{ maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, height: 'auto' }}>
      <ResponsiveAppBar />
      <div className={styles.main}>

        <Grid sx={{ width: '100vw', backgroundColor: '#f9f7ff', height: '100%' }} >
          <Grid container columns={12} spacing={{ md: 4, xs: 0 }} sx={{ marginTop: '0 !important', maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, minHeight: 'calc(100vh - 70px - 81px)' }} >
            <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex' }, paddingLeft: '0 !important' }} />
            <Grid item xs={12} md={11} sx={{ textAlign: 'center', paddingTop: '0 !important' }}>
              <ThemeProvider theme={Header1}>
                <Typography variant='h2' sx={{ marginTop: { md: '86px', xs: 0 }, marginBottom: { md: '106px', xs: 2 }, textAlign: 'left' }}>Впервые на «MeetMind»?
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={1} sx={{ paddingLeft: '0 !important', paddingTop: 0, display: { xs: 'none', md: 'flex' } }}></Grid>
            <Grid item md={5} xs={12} sx={{ paddingTop: 0 }} mb={{ xs: 0, md: '40px' }}>

              <Typography sx={{ fontSize: { xs: '20px' }, marginBottom: '30px', marginTop: { xs: '33px', md: 0 } }}>Удобная и быстрая регистрация.<br /><span style={{ fontFamily: 'RobotoThin', fontWeight: '700' }}>
                Введите свой номер телефона</span></Typography>
              <PhoneInput
                regions={['ex-ussr']} containerStyle={{ opacity: 1 }} buttonClass={styles.buttonClassInput} inputStyle={{ backgroundColor: '#f9f7ff', border: '1px solid #FFA630', borderRadius: '30px', height: '55px', fontSize: '1.2rem' }} placeholder='телефон' preferredCountries={['ru']}
                value={value}
                onChange={(newValue) => setTelephone(newValue)}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                }} />

              <ThemeProvider theme={buttonM}>
                <Button disabled={!active} onClick={(event) => { clickButton(event, 1) }} sx={{ marginTop: '30px', marginBottom: '30px' }}>
                  Я клиент</Button>
                <Button disabled={!active} onClick={(event) => { clickButton(event, 2)}} sx={{ marginLeft: '20px', marginTop: '30px', marginBottom: '30px' }}>
                  Я врач</Button>
              </ThemeProvider>

              <Typography sx={{ fontWeight: 100, maxWidth: { xs: '100%', md: '370px', xl: '80%' }, mb: { xs: '40px', md: '16px' }, fontSize: { xs: '14px' } }}>
                Вводя свой номер, вы принимаете условия <a style={{ color: '#FFA630' }}>пользовательского соглашения</a>, даёте <a style={{ color: '#FFA630' }}>согласие на обработку персональных данных</a> и на получение СМС‑паролей, а также иных информационных и сервисных сообщений на указанный номер телефона.
              </Typography>
              <Typography sx={{ fontSize: { xs: '20px' }, marginTop: '30px' }}>У вас уже есть аккаунт?</Typography>
              <Typography className={styles.hoverRouter} onClick={() => router.push('/authorization')} sx={{ fontSize: { xs: '20px' }, marginBottom: {xs:2, md:0} }}>Авторизоваться</Typography>
            </Grid>
            <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex' }, paddingTop: 0 }}></Grid>
            <Grid item md={4} xs={12} sx={{ order: { xs: -1, md: 0 }, pb: { xs: '50px', md: '36px' }, textAlign: 'center', paddingTop: { md: 0, xs: '60px' } }}>
              <Grid sx={{ maxWidth: { xs: '353px', md: '100%' }, textAlign: { xs: 'center', md: 'start' }, display: 'flex' }}><img src='reg.png' style={{ maxWidth: '353px' }} width="100%" /></Grid></Grid>
            <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'flex' }, paddingTop: 0 }}></Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>

    </Grid>
  );
}