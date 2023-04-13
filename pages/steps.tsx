import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider, Modal, Box, InputAdornment, MenuItem, Icon } from '@mui/material'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'react-phone-input-2/lib/style.css'
import Radio from '@mui/material/Radio';
import { useRouter } from 'next/router';
import buttonM from '../components/Buttons/ButtonMedium';
import buttonS from '../components/Buttons/ButtonSmall';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import PropTypes from 'prop-types';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

export default function Steps() {
  const themeS = createTheme();
  const themeSmallText = createTheme();
  const radioButtonText = createTheme();

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);



  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const router = useRouter();

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

  radioButtonText.typography.h4 = {
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
              <Grid item pt={{ xs: 4, md: '0 !important' }} pl={{ xs: 0, md: 4 }} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <TextField type="text" sx={{
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
                <TextField type="date" sx={{
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
                <TextField sx={{
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: '55px',
                    width: '270px', borderRadius: '4px', paddingY: '0', paddingX: '40px', color: '#4E4E4E', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 100,
                  }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #BAA5FF !important', borderRadius: '59px' },
                }}
                  id="outlined-basic" label="" variant="outlined" />
                <ThemeProvider theme={themeSmallText}>
                  <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><Radio style={{ paddingTop: 0, paddingBottom: 0 }} />Подписаться на новости и предложения</Typography>
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
                <TextField sx={{
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
                <TextField type="number" InputProps={{
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
                    <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}>{ show1 ? <CheckBoxOutlinedIcon onClick={handleOpen1} style={{ paddingTop: 0, paddingBottom: 0 }} sx={{ color: '#BAA5FF' }} /> : false}
                      <CheckBoxOutlineBlankOutlinedIcon sx={{ color: '#BAA5FF' }} />
                      Личная</Typography>
                    <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><CheckBoxOutlinedIcon onClick={handleOpen2} style={{ paddingTop: 0, paddingBottom: 0 }} sx={{ color: '#BAA5FF' }} />
                      <CheckBoxOutlineBlankOutlinedIcon sx={{ color: '#BAA5FF' }} />
                      Парная</Typography>
                    <Typography variant='h4' sx={{ opacity: 0.5, marginTop: '10px' }}><CheckBoxOutlinedIcon onClick={handleOpen3} style={{ paddingTop: 0, paddingBottom: 0 }} sx={{ color: '#BAA5FF' }} />                
                    <CheckBoxOutlineBlankOutlinedIcon sx={{ color: '#BAA5FF' }} />
                      Групповая</Typography>
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
                            <Typography variant='h4'><Radio />Стресс</Typography>
                            <Typography variant='h4'><Radio />Депрессия</Typography>
                            <Typography variant='h4'><Radio />Панические атаки</Typography>
                            <Typography variant='h4'> <Radio />Низкая самооценка</Typography>
                            <Typography variant='h4'><Radio />Тревожность и страхи</Typography>
                            <Typography variant='h4'><Radio />Перепады настроения</Typography>
                            <Typography variant='h4'><Radio />Упадок сил</Typography>
                            <Typography variant='h4'><Radio />Плаксивость, обидчивость</Typography>
                            <Typography variant='h4'><Radio />Раздражительность</Typography>
                            <Typography variant='h4'><Radio />Чувство  одиночества </Typography>
                            <Typography variant='h4'><Radio />Нежелательная агрессия, проблемы с самоконтролем </Typography>
                          </Grid>
                          <div>
                            <Typography variant='h4'><Radio />Зависимость от интернета </Typography>
                            <Typography variant='h4'><Radio />Расстройство пищевого поведения </Typography>
                            <Typography variant='h4'><Radio />Зависимость от алкоголя, наркотиков </Typography>
                            <Typography variant='h4'><Radio />Созовисимость, зависимость от партнёра</Typography>
                            <Typography variant='h4'><Radio />Ипохондрия, переживание о здоровье </Typography>
                            <Typography variant='h4'><Radio />Навязчивые мысли</Typography>
                            <Typography variant='h4'><Radio />Проблемы со сном</Typography>
                            <Typography variant='h4'><Radio />Чувство вины </Typography>
                            <Typography variant='h4'><Radio />Чувство стыда </Typography>
                            <Typography variant='h4'><Radio />Чувство неопределённости: «Не знаю чего хочу»</Typography>
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
                        <Typography variant='h4'><Radio />С партнером, в семье</Typography>
                        <Typography variant='h4'><Radio />С детьми</Typography>
                        <Typography variant='h4'><Radio />С родителями</Typography>
                        <Typography variant='h4'> <Radio />С другими людьми</Typography>
                        <Typography variant='h4'><Radio />Сексуальные</Typography>
                        <Typography variant='h4'><Radio />Насилие</Typography>
                        <Typography variant='h4'><Radio />Развод</Typography>
                        <Typography variant='h4'><Radio />Отсутствие отношений</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>      </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Radio />Прокрастинация</Typography>
                        <Typography variant='h4'><Radio />Выгорание</Typography>
                        <Typography variant='h4'><Radio />Отсутствие цели</Typography>
                        <Typography variant='h4'> <Radio />Недостаток мотивации</Typography>
                        <Typography variant='h4'><Radio />«Не знаю чем хочу заниматься»</Typography>
                        <Typography variant='h4'><Radio />«Не знаю какую профессию выбрать»</Typography>
                        <Typography variant='h4'><Radio />«Не знаю куда пойти учиться»</Typography>
                        <Typography variant='h4'><Radio /> Смена, потеря работы</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Radio />Переезд, эмиграция</Typography>
                        <Typography variant='h4'><Radio />Финансовые изменения</Typography>
                        <Typography variant='h4'><Radio />Измена</Typography>
                        <Typography variant='h4'> <Radio />Болезнью своя или близких</Typography>
                        <Typography variant='h4'><Radio />Беременность, рождение ребёнка</Typography>
                        <Typography variant='h4'><Radio />Разрыв отношений, развод </Typography>
                        <Typography variant='h4'><Radio />Насилие/ другое</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <ThemeProvider theme={buttonS}>
                  <Button onClick={(e) => setOpen1(false)}
                    variant="text" sx={{ marginLeft: '35px' }}>Закрыть</Button>
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
                      <Typography variant='h4'><Radio />Конфликты с партнером</Typography>
                      <Typography variant='h4'><Radio />Охладели отношения</Typography>
                      <Typography variant='h4'><Radio />Эмоциональное и/или физическое насилие</Typography>
                      <Typography variant='h4'> <Radio />Мы на грани развода</Typography>
                      <Typography variant='h4'><Radio />Сексуальные проблемы</Typography>
                      <Typography variant='h4'><Radio />Измена</Typography>
                      <Typography variant='h4'><Radio />Зависимость от партнёра</Typography>
                      <Typography variant='h4'><Radio />Зависимость партнёра от меня</Typography>
                      <Typography variant='h4'><Radio />Трудности с зачатием</Typography>
                      <Typography variant='h4'><Radio />Усыновление / другое</Typography>
                    </ThemeProvider>
                  </Grid>
                </Typography>
                <ThemeProvider theme={buttonS}>
                  <Button onClick={(e) => setOpen2(false)}
                    variant="text" sx={{ marginTop: '30px' }}>Закрыть</Button>
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
                            <Typography variant='h4'><Radio />Стресс</Typography>
                            <Typography variant='h4'><Radio />Депрессия</Typography>
                            <Typography variant='h4'><Radio />Панические атаки</Typography>
                            <Typography variant='h4'> <Radio />Низкая самооценка</Typography>
                            <Typography variant='h4'><Radio />Тревожность и страхи</Typography>
                            <Typography variant='h4'><Radio />Перепады настроения</Typography>
                            <Typography variant='h4'><Radio />Упадок сил</Typography>
                            <Typography variant='h4'><Radio />Плаксивость, обидчивость</Typography>
                            <Typography variant='h4'><Radio />Раздражительность</Typography>
                            <Typography variant='h4'><Radio />Чувство  одиночества </Typography>
                            <Typography variant='h4'><Radio />Нежелательная агрессия, проблемы с самоконтролем </Typography>
                          </Grid>
                          <div>
                            <Typography variant='h4'><Radio />Зависимость от интернета </Typography>
                            <Typography variant='h4'><Radio />Расстройство пищевого поведения </Typography>
                            <Typography variant='h4'><Radio />Зависимость от алкоголя, наркотиков </Typography>
                            <Typography variant='h4'><Radio />Созовисимость, зависимость от партнёра</Typography>
                            <Typography variant='h4'><Radio />Ипохондрия, переживание о здоровье </Typography>
                            <Typography variant='h4'><Radio />Навязчивые мысли</Typography>
                            <Typography variant='h4'><Radio />Проблемы со сном</Typography>
                            <Typography variant='h4'><Radio />Чувство вины </Typography>
                            <Typography variant='h4'><Radio />Чувство стыда </Typography>
                            <Typography variant='h4'><Radio />Чувство неопределённости: «Не знаю чего хочу»</Typography>
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
                        <Typography variant='h4'><Radio />С партнером, в семье</Typography>
                        <Typography variant='h4'><Radio />С детьми</Typography>
                        <Typography variant='h4'><Radio />С родителями</Typography>
                        <Typography variant='h4'> <Radio />С другими людьми</Typography>
                        <Typography variant='h4'><Radio />Сексуальные</Typography>
                        <Typography variant='h4'><Radio />Насилие</Typography>
                        <Typography variant='h4'><Radio />Развод</Typography>
                        <Typography variant='h4'><Radio />Отсутствие отношений</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>      </TabPanel>
                <TabPanel value={value1} index={2}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Radio />Прокрастинация</Typography>
                        <Typography variant='h4'><Radio />Выгорание</Typography>
                        <Typography variant='h4'><Radio />Отсутствие цели</Typography>
                        <Typography variant='h4'> <Radio />Недостаток мотивации</Typography>
                        <Typography variant='h4'><Radio />«Не знаю чем хочу заниматься»</Typography>
                        <Typography variant='h4'><Radio />«Не знаю какую профессию выбрать»</Typography>
                        <Typography variant='h4'><Radio />«Не знаю куда пойти учиться»</Typography>
                        <Typography variant='h4'><Radio /> Смена, потеря работы</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <TabPanel value={value1} index={3}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid sx={{ paddingLeft: { lg: 0, xs: 0 } }} >
                      <ThemeProvider theme={themeSmallText}>
                        <Typography variant='h4'><Radio />Переезд, эмиграция</Typography>
                        <Typography variant='h4'><Radio />Финансовые изменения</Typography>
                        <Typography variant='h4'><Radio />Измена</Typography>
                        <Typography variant='h4'> <Radio />Болезнью своя или близких</Typography>
                        <Typography variant='h4'><Radio />Беременность, рождение ребёнка</Typography>
                        <Typography variant='h4'><Radio />Разрыв отношений, развод </Typography>
                        <Typography variant='h4'><Radio />Насилие/ другое</Typography>
                      </ThemeProvider>
                    </Grid>
                  </Typography>
                </TabPanel>
                <ThemeProvider theme={buttonS}>
                  <Button onClick={(e) => setOpen3(false)}
                    variant="text" sx={{ marginLeft: '35px' }}>Закрыть</Button>
                </ThemeProvider>
              </Box>
            </Modal>

            <Grid item xs={3} sx={{ paddingLeft: 0 }}>
            </Grid>
            <Grid item pt={{ xs: 4, md: '110px !important' }} pl={{ xs: 0, md: 4 }} pb={'40px'} xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
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