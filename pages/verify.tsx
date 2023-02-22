import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider, OutlinedInput, IconButton, FormHelperText } from '@mui/material'
import {useRouter} from 'next/router'

import 'react-phone-input-2/lib/style.css'
import { Input } from '@material-ui/core'
import { useEffect, useState } from 'react'
import buttonM from '../components/Buttons/ButtonMedium'
import Header1 from '../components/Headers/Header1'
import styled from 'styled-components'
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Verify(this: any) {
  const [value0, setState0] = useState('');
  const [value1, setState1] = useState('');
  const [value2, setState2] = useState('');
  const [value3, setState3] = useState('');
  const [type, setType] = useState<any| undefined>();
  const [code, setCode] = useState<string | string[] | undefined>();
  const [telephone, setTelephone] = useState<string | string[] | undefined>();
  const [userid, setUserID] = useState(0);
  const router = useRouter()


  const [color, setcolor] = useState('#4E4E4E');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState(false);
  const [success, setSucess] = useState(false);
  const [primary, setPrimary] = useState(true);
  const [active, setActive] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  let user = {
    userid: userid,
    code: code,
    password: password,
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Div = styled.div`
  color: ${color};
  `

  useEffect(() => {
    var local;
    setType(router.query.type);
    console.log(type)
    setCode(router.query.code);
    setTelephone(router.query.telephone);
      let buff= router.query.id[0];
      let quq= Number(buff);
  }, [router.query]);

  function handleChangePassword(e: any) {
    setPassword(e.target.value)
    handleSubmit(password)
  }

  function handleSubmit(password: string) {
    // Password requirements
    const requirements = [
      // Must be at least 8 characters
      password.length >= 8,
      // Must contain at least 1 uppercase letter
      /[A-Z]/.test(password),
      // Must contain at least 1 lowercase letter
      /[a-z]/.test(password),
      // Must contain at least 1 number
      /\d/.test(password)
    ]

    // If all requirements are met, password is valid
    const isValid = requirements.every(Boolean)

    if (isValid) {
      setPrimary(false)
      setError(false)
      setSucess(true)
      setActive(true)
    } else {
      setError(true)
      setSucess(false)
      setPrimary(false)
    }
  }
  function handleChange(e: any, id: number) {
    let inputID1 = document.getElementById("firstNumber");
    let inputID2 = document.getElementById("secondNumber");
    let inputID3 = document.getElementById("thirdNumber");
    let inputID4 = document.getElementById("fourthNumber");

    switch (id) {
      case 0:
        setState0(e.target.value);
        if (inputID1 === null) { }
        else {
          if (inputID2 === null) { }
          else {
            inputID1.blur();
            inputID2.focus();
          }
        }
        break;
      case 1:
        setState1(e.target.value);
        if (inputID2 === null) {
        }
        else {
          if (inputID3 === null) { }
          else {
            inputID2.blur();
            inputID3.focus();
          }
        }
        break;
      case 2:
        setState2(e.target.value);
        if (inputID4 === null) {
        }
        else {
          if (inputID3 === null) { }
          else {
            inputID3.blur();
            inputID4.focus();
          }
        }
        break;
      case 3:
        setState3(e.target.value);
        break;
    }
  };

  function VerifyFunction(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    let persCode = value0 + value1 + value2 + value3;
    if (type == 1) {
      if (code == persCode) {
        setcolor('#4E4E4E !important')
        callAPI().then(data => {
          setTimeout(() => {
            router.push({
              pathname: '/authorization'})
          }, 500);
        }).catch(err => {
          console.log(err);
        });
        router.push('/authorization');
      }
      else {
        console.log('wrongcode')
        setcolor('red !important')
      }
    }
    else if (type == 2) {
      if (code == persCode) {
        setcolor('#4E4E4E !important')
        callAPI().then(data => {
          setTimeout(() => {
            router.push({
              pathname: '/authorization'})
          }, 500);
        }).catch(err => {
          console.log(err);
        });
        router.push('/authorization');
      }
      else {
        console.log('wrongcode')
        setcolor('red !important')

      }
    }
    else {
      console.log(-1)
    }
  }
  
  async function callAPI() {
    const response = await fetch('http://89.110.53.157:19525/v1/userActivate', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(user),
    });
    const json = await response.json();

    return json;
  }

  return (

    <Grid item sx={{ maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, height: 'auto' }}>
      <ResponsiveAppBar />
      <div className={styles.main}>

        <Grid sx={{ width: '100vw', backgroundColor: '#f9f7ff', height: '100%' }}>
          <Grid container columns={12} spacing={{ md: 4, xs: 0 }} sx={{ marginTop: '0 !important', maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, minHeight: 'calc(100vh - 70px - 81px)' }}>
            <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex', paddingLeft: '0 !important' } }}></Grid>
            <Grid item xs={11} pt={'0 !important'}>
              <ThemeProvider theme={Header1}>
                <Typography variant='h2' sx={{ marginTop: { md: '86px', xs: 0 }, marginBottom: { md: '106px', xs: 2 }, textAlign: 'left' }}>Почти закончили...</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex' }, paddingLeft: '0 !important' }}></Grid>
            <Grid item md={5} xs={12}><Typography sx={{ maxWidth: { xs: '383px', xl: '100%' }, placeSelf: 'flex-start', fontSize: { xs: '20px !important' }, marginBottom: '30px' }} >Подтверждение телефона
              <br /><span style={{ fontFamily: 'RobotoThin', fontWeight: '700' }}><Div>Введите код из СМС-сообщения,
                <br />отправленного на номер +{telephone}</Div></span></Typography>
              <Grid style={{ display: 'flex', flexDirection: 'column' }}>
                <Grid>
                  <TextField id='firstNumber'
                    InputProps={{ inputProps: { maxLength: 1 } }} sx={{
                      mr: '12px',
                      "input": {
                        height: '80px',
                        width: '60px', padding: 0, color: '#4E4E4E', fontSize: '40px', fontFamily: 'Roboto', textAlign: 'center'
                      },
                      ".MuiOutlinedInput-notchedOutline": { border: '1px solid #FFA630 !important', borderRadius: '4px' }
                    }} label="" variant='outlined'
                    value={value0} onChange={(e) => handleChange(e, 0)} />
                  <TextField id='secondNumber'
                    sx={{
                      mr: '12px',
                      "input": {
                        height: '80px',
                        width: '60px', borderRadius: '4px', padding: 0, color: '#4E4E4E', fontSize: '40px', fontFamily: 'Roboto', textAlign: 'center'
                      }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #FFA630 !important', borderRadius: '4px' },
                    }} InputProps={{ inputProps: { maxLength: 1 } }}
                    label="" variant="outlined" value={value1} onChange={(e) => handleChange(e, 1)} />
                  <TextField id='thirdNumber'
                    sx={{
                      mr: '12px',
                      "input": {
                        height: '80px',
                        width: '60px', borderRadius: '4px', padding: 0, color: '#4E4E4E', fontSize: '40px', fontFamily: 'Roboto', textAlign: 'center'
                      }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #FFA630 !important', borderRadius: '4px' },
                    }} InputProps={{ inputProps: { maxLength: 1 } }}
                    label="" variant="outlined" value={value2} onChange={(e) => handleChange(e, 2)} />
                  <TextField id='fourthNumber' sx={{
                    "input": {
                      height: '80px',
                      width: '60px', borderRadius: '4px', padding: 0, color: '#4E4E4E', fontSize: '40px', fontFamily: 'Roboto', textAlign: 'center'
                    }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #FFA630 !important', borderRadius: '4px' },
                  }} InputProps={{ inputProps: { maxLength: 1 } }}
                    label="" variant="outlined" value={value3} onChange={(e) => handleChange(e, 3)}
                  />
                </Grid>
                <Grid>
                  <Typography sx={{ fontFamily: 'RobotoThin', fontWeight: '700', marginTop: { xs: '30px' }, marginBottom: '20px' }}>Придумайте пароль. Пароль должен содержать заглавную и строчную буквы, символ и цифры, и должен быть не менее 8 символов</Typography>
                  <OutlinedInput sx={{
                    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                      height: '55px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
                    }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #FFA630 !important', borderRadius: '59px' },
                  }} placeholder="Пароль" value={password}
                    onChange={(e) => handleChangePassword(e)} endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    type={showPassword ? 'text' : 'password'}
                    id="outlined-basic" label="" />
                  {errors && (
                    <FormHelperText sx={{ color: 'error.main' }} id=''>
                      Пароль не соответствует требованиям
                    </FormHelperText>
                  )}
                  {success && (
                    <FormHelperText sx={{ color: 'green' }} id=''>
                      Пароль соответствует требованиям
                    </FormHelperText>
                  )}
                  {primary && (
                    <FormHelperText sx={{ color: 'primary.main' }} id=''>
                      Введите пароль
                    </FormHelperText>
                  )}
                </Grid>
                <Grid>
                  <ThemeProvider theme={buttonM}>
                    <Button disabled={!active} onClick={(event) => {VerifyFunction(event)}} sx={{ marginTop: '30px', marginBottom: '50px' }}>
                      Продолжить</Button>
                  </ThemeProvider>
                </Grid>
              </Grid>
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