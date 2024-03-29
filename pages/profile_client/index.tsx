import styles from '../../styles/Home.module.css'
import ResponsiveAppBarProfile from '../../components/BarProfile'
import Footer from '../../components/Footer'
import { Grid, Typography, Button, TextField, ThemeProvider, Box, Tabs, Tab } from '@mui/material'
import * as React from 'react';
import 'react-phone-input-2/lib/style.css'
import DrawerCompClient from '../../components/Drawer_client';
import ProfileHeader from '../../components/Headers/ProfileHeader';
import buttonM from '../../components/Buttons/ButtonMedium';
import MiniCard from "../../components/card/miniCard";
import styled from 'styled-components';
import { useState } from 'react';
import TabPanel from '../../components/tab/TabPanel';
import a11yProps from "../../components/tab/a11yProps";
import { useRouter } from 'next/router';

export default function Profile(this: any) {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState<string | string[] | any>();

  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (router.query.user) {
      let buff5 = router.query.user;
      console.log(buff5)
      if (buff5) {
        setData(JSON.parse(buff5));
        console.log(buff5)
        console.log(data)

        sessionStorage.setItem('user', buff5);
      }
    }
  }, [router.query.user]);

  React.useEffect(() => {
    let buff = sessionStorage.getItem('user');
    setData(JSON.parse(buff));
  }, [])


  interface ICardStateElem {
    nums: string;
    dateExpired: string;
    backgroundColor: string;
    cardType: "mir" | "mastercard" | "visa";
  }

  const [cardsState, setCardsState] = useState<ICardStateElem[]>([]);
  function generateRandomNums(): string {
    // random nums array
    const randomNum: Array<string | number> = [];
    // generate random nums cycle - do not defensed
    for (let i = 0; i <= 19; i++) {
      if (i === 5 || i === 10 || i === 15) {
        randomNum[i] = " ";
        continue;
      }
      randomNum[i] = Math.trunc(1 + Math.random() * (10 - 1));
    }
    // hide 5 - 12 symbols of nums
    for (let i = 6; i <= 14; i++) {
      if (i === 10) {
        continue;
      }
      randomNum[i] = "*";
    }
    return randomNum.join("");
  }


  function generateRandomDateExpired(): string {
    const monthExpired: number = Math.trunc(1 + Math.random() * (12 - 1));
    const dayExpired: number = Math.trunc(1 + Math.random() * (30 - 1));
    return monthExpired + "/" + dayExpired;
  }

  function generateRandomCardType(): "mir" | "mastercard" | "visa" {
    const cardType: number = Math.trunc(1 + Math.random() * (3 - 1));
    switch (cardType) {
      case 1:
        return "mir";
      case 2:
        return "visa";
      default:
        return "visa";
    }
  }

  function generateRandomCardBackground(): string {
    // array of some colors to generate cards
    const randomColorsArray = ["#76C1B1", "#514573", "#FFA630", "#8664E8", "#CBC7FC", "#7118B7"];
    const randomNum = Math.trunc(0 + Math.random() * (5 - 0));
    return randomColorsArray[randomNum];
  }


  function handleAddCard() {


    // creating card buff object data to put its into state
    const cardObjectData: ICardStateElem = {
      nums: generateRandomNums(),
      cardType: generateRandomCardType(),
      backgroundColor: generateRandomCardBackground(),
      dateExpired: generateRandomDateExpired(),
    }
    console.log(cardObjectData);
    setCardsState(cardsState.concat(cardObjectData));

  }
  console.log(data)
  if (data) {
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
                        <Typography variant="h3">Имя: {data.user_name} </Typography>
                     {/*    <Typography variant="h3" sx={{ marginTop: '29px' }}>Фамилия:</Typography>
                        <Typography variant="h3" sx={{ marginTop: '29px' }}>Отчество:</Typography> */}
                        <Typography variant="h3" sx={{ marginTop: '29px' }}>Дата рождения {data.birthday.split('T')[0]}</Typography>
                        <Typography variant="h3" sx={{ marginTop: '29px' }}>Пол</Typography>
                        <Typography variant="h3" sx={{ marginTop: '29px' }}>E-mail: {data.email}</Typography>
                        <Typography variant="h3" sx={{ marginTop: '29px' }}>Телефон: {data.phone}</Typography>
                      </ThemeProvider>
                      <ThemeProvider theme={buttonM}>
                        <Button sx={{ marginTop: '40px' }} >
                          Редактировать</Button>
                      </ThemeProvider>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Grid item xs={12} sx={{ paddingTop: '0 !important' }}>
                      <ThemeProvider theme={ProfileHeader}>
                        <Typography variant="h6" sx={{ marginBottom: '20px' }}>Банковские карты</Typography>
                        <BankCardsWrapper>
                          {
                            cardsState.length === 0 ?
                              null
                              :
                              <>
                                {
                                  cardsState.map((elem: ICardStateElem) => {
                                    return <MiniCard nums={elem.nums} dateExpire={elem.dateExpired} cardPaymentType={elem.cardType} backgroundColor={elem.backgroundColor} key={cardsState.indexOf(elem).toString()} />
                                  })
                                }
                              </>

                          }
                          <img src="card_add.png" style={{ width: '30px', cursor: 'pointer' }} onClick={handleAddCard} />
                        </BankCardsWrapper>


                        <Typography variant="h6" sx={{ marginTop: '29px', marginBottom: '20px' }}>Сертификаты и промокоды</Typography>
                        <TextField sx={{ width: '300px' }}
                          id="outlined-basic" label="" variant="outlined" />
                      </ThemeProvider>
                      <ThemeProvider theme={buttonM}>
                        <Button sx={{ marginLeft: '10px' }}>
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
  else {
    return (<div><Grid item sx={{ maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, height: 'auto' }}>
      <ResponsiveAppBarProfile />
      <div className={styles.main}>
        <Grid sx={{ width: '100vw', backgroundColor: '#f9f7ff', height: '100%' }}>
        </Grid>
        <Footer />
      </div>
    </Grid>
    </div>)
  }
}
const BankCardsWrapper = styled.div`
  display: flex;
  align-items: center;   
`