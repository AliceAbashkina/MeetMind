import styles from '../../styles/Home.module.css'
import ResponsiveAppBarProfile from '../../components/BarProfile'
import Footer from '../../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider, Drawer, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, IconButton, MenuItem, Tabs, Tab } from '@mui/material'
import * as React from 'react';
import 'react-phone-input-2/lib/style.css'
import DrawerCompClient from '../../components/Drawer_client';
import ProfileHeader from '../../components/Headers/ProfileHeader';
import buttonM from '../../components/Buttons/ButtonMedium';
import PropTypes from 'prop-types';
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

export default function Profile(this: any) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <Grid item sx={{ maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, height: 'auto' }}>
      <ResponsiveAppBarProfile />
      <div className={styles.main}>

        <Grid sx={{ width: '100vw', backgroundColor: '#f9f7ff', height: '100%' }}>
          <Grid container columns={12} spacing={{ md: 4, xs: 0 }} sx={{ marginTop: '0 !important', maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, minHeight: 'calc(100vh - 70px - 81px)' }}>
            <DrawerCompClient />
            <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'flex' }, paddingTop: 0 }}></Grid>

            <Grid item xs={8} sx={{ paddingTop: '80px !important' }}>
              <Grid item sx={{ display: 'flex', flexDirection: 'row' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Информация" {...a11yProps(0)} />
                  <Tab label="Способ оплаты" {...a11yProps(1)} />
                </Tabs>
              </Grid>
              <Grid container columns={12} sx={{ paddingTop: '0' }}>
                <TabPanel value={value} index={0}>
                  <Grid item xs={12} >
                    <ThemeProvider theme={ProfileHeader}>
                      <Typography variant="h3">Имя:</Typography>
                      <Typography variant="h3" sx={{ marginTop: '29px' }}>Фамилия:</Typography>
                      <Typography variant="h3" sx={{ marginTop: '29px' }}>Отчество:</Typography>
                      <Typography variant="h3" sx={{ marginTop: '29px' }}>Дата рождения</Typography>
                      <Typography variant="h3" sx={{ marginTop: '29px' }}>Пол</Typography>
                      <Typography variant="h3" sx={{ marginTop: '29px' }}>E-mail:</Typography>
                      <Typography variant="h3" sx={{ marginTop: '29px' }}>Телефон:</Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={buttonM}>
                      <Button sx={{ marginTop: '40px' }} >
                        Сохранить</Button>
                    </ThemeProvider>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid item xs={12} sx={{ paddingTop: '0 !important' }}>
                    <ThemeProvider theme={ProfileHeader}>
                      <Typography variant="h6" sx={{marginBottom:'20px'}}>Банковские карты</Typography>
                      <img src="card_add.png" style={{width:'30px', cursor: 'pointer'}}/>
                      <Typography variant="h6" sx={{ marginTop: '29px', marginBottom: '20px' }}>Сертификаты и промокоды</Typography>
                      <TextField sx={{ width: '300px' }}
                        id="outlined-basic" label="" variant="outlined" />
                    </ThemeProvider>
                    <ThemeProvider theme={buttonM}>
                      <Button sx={{marginLeft:'10px'}}>
                        Активировать</Button>
                    </ThemeProvider>
                  </Grid>
                </TabPanel>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </Grid>
  );
}