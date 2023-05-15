import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider, Modal, Box, InputAdornment, MenuItem, Checkbox } from '@mui/material'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'react-phone-input-2/lib/style.css'
import Radio from '@mui/material/Radio';
import { useRouter } from 'next/router';
import buttonM from '../components/Buttons/ButtonMedium';
import buttonS from '../components/Buttons/ButtonSmall';
import { useEffect } from 'react'


import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import PropTypes from 'prop-types';

export default function Steps() {
  const themeS = createTheme();
  const themeSmallText = createTheme();
  const RadioButtonText = createTheme();

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);

  const [idUser, setUserID] = React.useState(0);
  const [fio, setFio] = React.useState('');
  const [date, setDate] = React.useState();
  const [email, setEmail] = React.useState('');
  const [boolEmail, setBoolEmail] = React.useState('');
  const [timezone, SetTimeZone] = React.useState(0);
  const [pay, setPay] = React.useState(0);
  const [pastTherapy, setPastTherapy] = React.useState(false);
  const [pastTherapy2, setPastTherapy2] = React.useState(false);
  const router = useRouter();

  const [answers, setAnswers] = React.useState();
  useEffect(() => {
    let buff = router.query.id;
    console.log(buff)
    console.log(router.query)
    let quq = Number(buff);
    setUserID(quq)
    setUserID(23)

    console.log(quq)

  }, [router.query]);

  const handleChangeCheck1 = (event) => {
    setChecked1(event.target.checked);
    if (event.target.checked == true) {
      handleOpen1();
    }
  };

  const handleChangeCheck2 = (event) => {
    setChecked2(event.target.checked);
    if (event.target.checked == true) {
      handleOpen2();
    }
  };
  const handleChangeCheck3 = (event) => {
    setChecked3(event.target.checked);
    if (event.target.checked == true) {
      handleOpen3();
    }
  };

  const handleChangeCheck4 = (event) => {
    setChecked4(event.target.checked);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange11 = (event) => {
    setFio(event.target.value);
  };

  const handleChange12 = (event) => {
    setDate(event.target.value);
  };
  const handleChange13 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange14 = (event) => {
    setBoolEmail(event.target.checked);
  };

  const handleChange15 = (event) => {
    let timezone = event.target.value;
    SetTimeZone(timezone);
  };

  const handleChange16 = (event) => {
    let solvency = event.target.value;
    setPay(solvency);
  };

  const handleChange17 = (event) => {
    let answer;
    if (event.target.value == "Да") {
      answer = true;
    }
    else {
      answer = false;
    }
    setPastTherapy2(answer);
  };

  const handleChange18 = (event) => {
    setAnswers(event.target.value);
  };


  const currencies = [
    {
      value: 'Да',
      label: 'да',
    },
    {
      value: 'Нет',
      label: 'нет',
    },
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll',
    width: { xs: '90%', lg: '50%' },
    height: { xs: '80vh', lg: 'auto' }
  };
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

  RadioButtonText.typography.h4 = {
    fontFamily: 'RobotoThin',
    fontSize: '20px',
    color: '#4E4E4E'
  };



  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function clickButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    callAPI().then(data => {
    }).catch(err => {
      console.log(err);
    });
  }

  async function callAPI() {
    let User = {
      "user_id": idUser,
      "user_name": fio,
      "birthday": date,
      "email": email,
      "time_zone": Number(timezone),
      "solvency": Number(pay),
      "experience": true,
      "questionary": [
        {
          "questionary_id": 1,
          "answer": true
        },
        {
          "questionary_id": 2,
          "answer": true
        }
      ]
    }
    console.log(User)
    const response = await fetch('http://localhost:8210/v1/saveUserInfo', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(User),
    });
    const json = await response.json();
    console.log(idUser)
    router.push({
      pathname: '/profile_client/load',
      query: { id: 23 }}, '/profile_client/load');
      return json;
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <Grid item sx={{ maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, height: 'auto' }}>
      <ResponsiveAppBar />
      <div className={styles.main}>
        <Grid sx={{ width: '100vw', height: '100%', backgroundColor: '#f9f7ff' }}>
          <Grid container columns={12} spacing={{ md: 4, xs: 0 }} sx={{ marginTop: '0 !important', maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, minHeight: '100%' }} >

            <Grid xs={12} pt={{ xs: 4, md: '60px !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item pl={{ xs: '0 !important' }} xs={12} md={3} pt={{ xs: 0, md: '16ыpx' }} sx={{ textAlign: { xs: 'center', md: 'start' }, mt: { xs: 4, md: 0 } }}>
                <ThemeProvider theme={themeS}>
                  <Typography variant='h4'>Как Вас зовут?</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <TextField type="text" value={fio} onChange={handleChange11} sx={{
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    width: '270px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
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
                <TextField type="date" value={date} onChange={handleChange12} sx={{
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    width: '160px', borderRadius: '4px', paddingY: '0', paddingX: '10px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
                  }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
                }}
                  id="outlined-basic" label="" variant="outlined" />
                <ThemeProvider theme={themeSmallText}>
                  <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}>Для получения наших услуг Вы должны быть старше 16 лет</Typography>
                </ThemeProvider>
              </Grid>
            </Grid>

            <Grid item xs={12} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '40px !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <ThemeProvider theme={themeS}>
                  <Typography variant='h4'>E-mail</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }} >
                <TextField value={email} onChange={handleChange13} sx={{
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    width: '270px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
                  }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
                }}
                  id="outlined-basic" label="" variant="outlined" />
                <ThemeProvider theme={themeSmallText}>
                  <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Checkbox style={{ paddingTop: 0, paddingBottom: 0 }} />Подписаться на новости и предложения</Typography>
                </ThemeProvider>
              </Grid>
            </Grid>


            <Grid item xs={12} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '40px !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <ThemeProvider theme={themeS}>
                  <Typography variant='h4'>Часовой пояс</Typography>
                </ThemeProvider>
              </Grid>

              <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }} >
                <TextField value={timezone} onChange={handleChange15} sx={{
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    width: '175px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
                  }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
                }}
                  id="outlined-basic" label="" variant="outlined" />
              </Grid>
            </Grid>

            <Grid item xs={12} pt={{ xs: 4, md: '40px !important' }} pl={{ xs: '0 !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <ThemeProvider theme={themeS}>
                  <Typography variant='h4'>Сколько Вы готовы платить за сессию?</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }} >
                <TextField value={pay} onChange={handleChange16} type="text" InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRubleIcon />
                    </InputAdornment>
                  ),
                }} sx={{
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    width: '80px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
                  }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
                }}
                  id="outlined-basic" label="" variant="outlined" />
              </Grid>
            </Grid>


            <Grid item xs={12} pt={{ xs: 4, md: '40px !important' }} pl={{ xs: '0 !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <ThemeProvider theme={themeS}>
                  <Typography variant='h4'>Был ли у Вас опыт терапии?</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }} >
                <TextField select sx={{
                  width: '150px',
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
                  }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
                }} defaultValue="Нет"
                  id="outlined-basic" label="" variant="outlined">
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Grid item xs={12} pt={{ xs: 4, md: '40px !important' }} pl={{ xs: '0 !important' }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={3} pl={{ xs: '0 !important' }} pt={{ xs: 4, md: '16px !important' }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <ThemeProvider theme={themeS}>
                  <Typography variant='h4'>Какая терапия Вам необходима?</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ alignSelf: { xs: 'center', md: 'start' } }} >
                <ThemeProvider theme={themeSmallText}>
                  <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Checkbox {...label} onChange={handleChangeCheck1}
                      checked={checked1} />Личная</Typography>
                    <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Checkbox {...label} onChange={handleChangeCheck2}
                      checked={checked2}
                    />Парная</Typography>
                    <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Checkbox {...label} onChange={handleChangeCheck3}
                      checked={checked3}
                    />Групповая</Typography>
                  </Grid>
                </ThemeProvider>
              </Grid>
            </Grid>

            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box sx={{ borderRadius: '5px' }}>
                  <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="basic tabs example" scrollButtons
                    allowScrollButtonsMobile>
                    <Tab label="Мое психологическое состояние" {...a11yProps(0)} />
                    <Tab label="Отношения" {...a11yProps(1)} />
                    <Tab label="Работа, карьера, Обучение" {...a11yProps(2)} />
                    <Tab label="События в жизни" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Grid item sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
                          <Grid item sx={{ marginRight: '80px' }}>
                            <Typography variant='h4'><Checkbox {...label} />Стресс</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Депрессия</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Панические атаки</Typography>
                            <Typography variant='h4'> <Checkbox {...label} />Низкая самооценка</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Тревожность и страхи</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Перепады настроения</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Упадок сил</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Плаксивость, обидчивость</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Раздражительность</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Чувство  одиночества </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Нежелательная агрессия, проблемы с самоконтролем </Typography>
                          </Grid>
                          <div>
                            <Typography variant='h4'><Checkbox {...label} />Зависимость от интернета </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Расстройство пищевого поведения </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Зависимость от алкоголя, наркотиков </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Созовисимость, зависимость от партнёра</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Ипохондрия, переживание о здоровье </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Навязчивые мысли</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Проблемы со сном</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Чувство вины </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Чувство стыда </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Чувство неопределённости: «Не знаю чего хочу»</Typography>
                          </div>
                        </Grid>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Checkbox {...label} />С партнером, в семье</Typography>
                        <Typography variant='h4'><Checkbox {...label} />С детьми</Typography>
                        <Typography variant='h4'><Checkbox {...label} />С родителями</Typography>
                        <Typography variant='h4'> <Checkbox {...label} />С другими людьми</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Сексуальные</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Насилие</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Развод</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Отсутствие отношений</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>      </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Checkbox {...label} />Прокрастинация</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Выгорание</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Отсутствие цели</Typography>
                        <Typography variant='h4'> <Checkbox {...label} />Недостаток мотивации</Typography>
                        <Typography variant='h4'><Checkbox {...label} />«Не знаю чем хочу заниматься»</Typography>
                        <Typography variant='h4'><Checkbox {...label} />«Не знаю какую профессию выбрать»</Typography>
                        <Typography variant='h4'><Checkbox {...label} />«Не знаю куда пойти учиться»</Typography>
                        <Typography variant='h4'><Checkbox {...label} /> Смена, потеря работы</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Checkbox {...label} />Переезд, эмиграция</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Финансовые изменения</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Измена</Typography>
                        <Typography variant='h4'> <Checkbox {...label} />Болезнью своя или близких</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Беременность, рождение ребёнка</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Разрыв отношений, развод </Typography>
                        <Typography variant='h4'><Checkbox {...label} />Насилие/ другое</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <ThemeProvider theme={buttonS}>
                  <Button onClick={(e) => setOpen1(false)}
                    variant="text" sx={{ marginLeft: '35px' }}>Сохранить</Button>
                </ThemeProvider>
              </Box>
            </Modal>

            <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                    <ThemeProvider theme={themeSmallText}>
                      <Typography variant='h4'><Checkbox {...label} />Конфликты с партнером</Typography>
                      <Typography variant='h4'><Checkbox {...label} />Охладели отношения</Typography>
                      <Typography variant='h4'><Checkbox {...label} />Эмоциональное и/или физическое насилие</Typography>
                      <Typography variant='h4'> <Checkbox {...label} />Мы на грани развода</Typography>
                      <Typography variant='h4'><Checkbox {...label} />Сексуальные проблемы</Typography>
                      <Typography variant='h4'><Checkbox {...label} />Измена</Typography>
                      <Typography variant='h4'><Checkbox {...label} />Зависимость от партнёра</Typography>
                      <Typography variant='h4'><Checkbox {...label} />Зависимость партнёра от меня</Typography>
                      <Typography variant='h4'><Checkbox {...label} />Трудности с зачатием</Typography>
                      <Typography variant='h4'><Checkbox {...label} />Усыновление / другое</Typography>
                    </ThemeProvider>
                  </Grid>
                </Typography>
                <ThemeProvider theme={buttonS}>
                  <Button onClick={(e) => setOpen2(false)}
                    variant="text" sx={{ marginTop: '30px' }}>Сохранить</Button>
                </ThemeProvider>
              </Box>
            </Modal>

            <Modal
              open={open3}
              onClose={handleClose3}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box sx={{ borderRadius: '5px' }}>
                  <Tabs value={value1} onChange={handleChange1} variant="scrollable" aria-label="basic tabs example" scrollButtons
                    allowScrollButtonsMobile>
                    <Tab label="Мое психологическое состояние" {...a11yProps(0)} />
                    <Tab label="Отношения" {...a11yProps(1)} />
                    <Tab label="Работа, карьера, Обучение" {...a11yProps(2)} />
                    <Tab label="События в жизни" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <TabPanel value={value1} index={0}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Grid item sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
                          <Grid item sx={{ marginRight: '80px' }}>
                            <Typography variant='h4'><Checkbox {...label} />Стресс</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Депрессия</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Панические атаки</Typography>
                            <Typography variant='h4'> <Checkbox {...label} />Низкая самооценка</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Тревожность и страхи</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Перепады настроения</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Упадок сил</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Плаксивость, обидчивость</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Раздражительность</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Чувство  одиночества </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Нежелательная агрессия, проблемы с самоконтролем </Typography>
                          </Grid>
                          <div>
                            <Typography variant='h4'><Checkbox {...label} />Зависимость от интернета </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Расстройство пищевого поведения </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Зависимость от алкоголя, наркотиков </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Созовисимость, зависимость от партнёра</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Ипохондрия, переживание о здоровье </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Навязчивые мысли</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Проблемы со сном</Typography>
                            <Typography variant='h4'><Checkbox {...label} />Чувство вины </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Чувство стыда </Typography>
                            <Typography variant='h4'><Checkbox {...label} />Чувство неопределённости: «Не знаю чего хочу»</Typography>
                          </div>
                        </Grid>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value1} index={1}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Checkbox {...label} />С партнером, в семье</Typography>
                        <Typography variant='h4'><Checkbox {...label} />С детьми</Typography>
                        <Typography variant='h4'><Checkbox {...label} />С родителями</Typography>
                        <Typography variant='h4'> <Checkbox {...label} />С другими людьми</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Сексуальные</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Насилие</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Развод</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Отсутствие отношений</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>      </TabPanel>
                <TabPanel value={value1} index={2}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Checkbox {...label} />Прокрастинация</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Выгорание</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Отсутствие цели</Typography>
                        <Typography variant='h4'> <Checkbox {...label} />Недостаток мотивации</Typography>
                        <Typography variant='h4'><Checkbox {...label} />«Не знаю чем хочу заниматься»</Typography>
                        <Typography variant='h4'><Checkbox {...label} />«Не знаю какую профессию выбрать»</Typography>
                        <Typography variant='h4'><Checkbox {...label} />«Не знаю куда пойти учиться»</Typography>
                        <Typography variant='h4'><Checkbox {...label} /> Смена, потеря работы</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value1} index={3}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Checkbox {...label} />Переезд, эмиграция</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Финансовые изменения</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Измена</Typography>
                        <Typography variant='h4'> <Checkbox {...label} />Болезнью своя или близких</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Беременность, рождение ребёнка</Typography>
                        <Typography variant='h4'><Checkbox {...label} />Разрыв отношений, развод </Typography>
                        <Typography variant='h4'><Checkbox {...label} />Насилие/ другое</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <ThemeProvider theme={buttonS}>
                  <Button onClick={(e) => setOpen3(false)}
                    variant="text" sx={{ marginLeft: '35px' }}>Сохранить</Button>
                </ThemeProvider>
              </Box>
            </Modal>

            <Grid item xs={3} sx={{ paddingLeft: 0 }}>
            </Grid>
            <Grid item pt={{ xs: 4, md: '110px !important' }} pl={{ xs: 0, md: 4 }} pb={'40px'} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <ThemeProvider theme={buttonM}>
                <Button onClick={clickButton}
                  variant="text">Далее</Button>
              </ThemeProvider>
            </Grid>

          </Grid>
        </Grid>
        <Footer />
      </div>
    </Grid>
  );
}

