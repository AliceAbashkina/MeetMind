import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/Bar'
import Footer from '../components/Footer'
import { Grid, Typography, Button, TextField, createTheme, ThemeProvider } from '@mui/material'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/router';
import Header3 from '../components/Headers/Header3';
import ButtonPeople from '../components/Buttons/ButtonPeople'
import buttonM from '../components/Buttons/ButtonMedium'
import buttonSchedule from '../components/Buttons/ButtonSchedule'
import CalendarSchedule from '../components/Calendar'

export default function Steps3() {
  const themeS = createTheme();
  const themeSmallText = createTheme();
  const router = useRouter();

  themeS.typography.h3 = {
    fontFamily: 'RobotoThin',
    fontWeight: 600,
    textAlign: 'center',
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

  return (
    <Grid item sx={{ maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, height: 'auto' }}>
      <ResponsiveAppBar />
      <div className={styles.main}>
        <Grid sx={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f9f7ff' }}>
          <Grid container columns={12} spacing={{ xs: 4 }} sx={{ marginTop: '0 !important', maxWidth: { lg: '80%', xs: 'calc(100% - 40px)', xl: '1440px' }, marginLeft: { xs: '20px', lg: '10%', xl: 'auto' }, marginRight: { xs: '20px', lg: '10%', xl: 'auto' }, minHeight: 'calc(100vh - 70px - 81px)' }} >
            <Grid pt={{ xs: 4 }} pl={{ xs: '0 !important', md: 4 }} mb={0} item xs={4} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h3' sx={{ fontFamily: 'RobotoThin', fontWeight: 600, textAlign: 'center', marginBottom: '20px', color: '#FFA630' }}>Шаг 1. Персональные данные</Typography>
              </ThemeProvider>
              <Grid item xs={12} sx={{ width: '100%', background: '#FFA630', height: '7px', borderRadius: '18px' }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{ xs: 0, md: 4 }} item xs={3} sx={{ display: { xs: 'none', md: 'block' } }} >
              <ThemeProvider theme={themeS}>
                <Typography variant='h3' sx={{ fontFamily: 'RobotoThin', fontWeight: 600, textAlign: 'center', marginBottom: '20px', color: '#FFA630' }}>Шаг 2. Личные вопросы</Typography>
              </ThemeProvider>
              <Grid item xs={12} sx={{ width: '100%', background: '#FFA630', height: '7px', borderRadius: '18px' }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{xs:'0 !important', md:'32px !important'}} item xs={12} md={3} >
              <ThemeProvider theme={themeS}>
                <Typography variant='h3' sx={{ fontFamily: 'RobotoThin', fontWeight: 600, textAlign: 'center', marginBottom: '20px'}}>Шаг 3. Выбор специалиста</Typography>
              </ThemeProvider>
              <Grid item xs={12}  sx={{ width: '100%', background: '#FFA630', height: '7px', borderRadius: '18px' }} />
            </Grid>
            <Grid pt={{ xs: 4 }} pl={{ xs: 0, md: 4 }} item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}>
              <ThemeProvider theme={themeS}>
                <Typography variant='h3'>Шаг 4. Способ оплаты</Typography>
              </ThemeProvider>
              <Grid sx={{ background: '#D9D9D9', height: '7px', width: '100%', borderRadius: '18px' }} />
            </Grid>

            <Grid item xs={12} sx={{ paddingLeft: '0 !important', display: 'flex', flexDirection: { md: 'row', xs: 'column' }, alignSelf:{xs: 'center', md:'start'} }}>
              <ThemeProvider theme={Header3}>
                <Typography variant="h3" sx={{ alignSelf: 'center', paddingRight: { xs: 0, md: '58px', xl: '158px' }, paddingBottom: {xs:2, md: 0} }}>Наши специалисты</Typography>
              </ThemeProvider>

              <ButtonPeople />
            </Grid>

            <Grid sx={{display:'flex', flexDirection:{md:'row', xs:'column'}}}>
              <Grid item xs={12} md={3} sx={{ paddingLeft: '0 !important', paddingTop:'60px !important', placeSelf:{xs:'center', md: 'start'}, display:'flex', flexDirection:'column'}}>
                <img src='portrait_man1.png' width='100%' alt='main-img' style={{ maxWidth: '251px', marginBottom: '60px' }} />
                <ThemeProvider theme={buttonM}>
                  <Button sx={{width:'249px'}} onClick={() => router.push('/middle_page')} variant="text">Выбрать специалиста</Button>
                </ThemeProvider>
              </Grid>
              <Grid item xs={9} sx={{paddingTop:'60px !important'}}>
                <ThemeProvider theme={themeSmallText}>
                  <Typography variant="h4" sx={{ fontFamily: 'Roboto', fontWeight: 400, marginBottom: '5px' }}>Гунько Дмитрий Владимирович</Typography>
                  <Typography variant="h4" sx={{ marginBottom: '20px' }}>Опыт 6 лет</Typography>

                  <Typography variant="h4" sx={{ fontFamily: 'Roboto', fontWeight: 400, marginBottom: '5px' }}>О специалисте</Typography>
                  <Typography variant="h4" sx={{ marginBottom: '20px' }}>Дмитрий поможет справиться с семейными, возрастными и финансовыми кризисами, депрессиями, паническими атаками. Работает в сопровождении с диагнозами ПТСР, ОКР, ПРЛ.
                    Поможет прожить потери и расставания, обрести уверенность в себе и поднять самооценку. Исследовать страхи и навязчивые мысли. Наладить отношения в семейной системе, с друзьями и на работе. Качественное присутствие, чуткость, включенность в процесс, поддержка и принятие - основные принципы работы.</Typography>

                  <Typography variant="h4" sx={{ fontFamily: 'Roboto', fontWeight: 400, marginBottom: '5px' }}>Образование</Typography>
                  <Typography variant="h4" sx={{ marginBottom: '20px' }}>2021
                    Московский Гештальт Институт. Спецкурс &quot; Чужак в&nbsp;чужой стране&quot;.
                    Онтология и феноменология зависимости.
                    <br />
                    <br />
                    2021
                    Московский Гештальт Институт. Специализация : &#34; Гештальт-подход в
клинической практике : от&#160;диагноза к&#160;контакту&#34;.
                    <br />
                    <br />
                    1993
                    Крымский медицинский институт. Лечебный факультет, врач-терапевт.</Typography>
                </ThemeProvider>
              </Grid>
              </Grid>

            <Grid item xs={12} sx={{ width: '100%', background: '#4E4E4E', height: '1px', borderRadius: '1px', padding: '0 !important', opacity: 0.5, marginTop: '70px' }} />
            <CalendarSchedule />
            <Grid item xs={12} sx={{ width: '100%', background: '#4E4E4E', height: '1px', borderRadius: '1px', padding: '0 !important', opacity: 0.5, marginTop: '20px' }} />
            <Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Grid item xs={12} md={9} sx={{ paddingTop: { md: '10px !important', xs: '10px !important' }, display: {xs:'inline', md:'flex'}, flexDirection: 'row', marginBottom:'15px', paddingLeft: {xs:'0 !important', md:'32px'} }}>
              <ThemeProvider theme={buttonSchedule}>
                <Button>08:00</Button>
                <Button>09:00</Button>
                <Button>10:00</Button>
                <Button>11:00</Button>
                <Button>12:00</Button>
                <Button sx={{marginRight:'0 !important'}}>13:00</Button>
              </ThemeProvider>
            </Grid>

            <Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Grid item xs={12} md={9} sx={{ paddingTop: { md: '0 !important', xs: '10px !important' }, display: {xs:'inline', md:'flex'}, flexDirection: 'row', marginBottom:'15px', paddingLeft: {xs:'0 !important', md:'32px'} }}>
              <ThemeProvider theme={buttonSchedule}>
                <Button>14:00</Button>
                <Button>15:00</Button>
                <Button>16:00</Button>
                <Button>17:00</Button>
                <Button>18:00</Button>
                <Button sx={{marginRight:'0 !important'}}>19:00</Button>
              </ThemeProvider>
            </Grid>

            <Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Grid item xs={12} md={9} sx={{ paddingTop: { md: '0 !important', xs: '10px !important' }, display: {xs:'inline', md:'flex'}, flexDirection: 'row', paddingLeft: {xs:'0 !important', md:'32px'} }}>
              <ThemeProvider theme={buttonSchedule}> 
                <Button>19:00</Button>
                <Button>20:00</Button>
                <Button>21:00</Button>
                <Button>22:00</Button>
                <Button sx={{marginRight:'0 !important'}} >23:00</Button>
              </ThemeProvider>
            </Grid>
            <Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' } }} />

            <Grid pt={{md:'43px !important'}} pb={'49px'} item md={9}  sx={{textAlign:{xs:'center', md:'start'}}}>
    <ThemeProvider theme={buttonM}>
        <Button onClick={()=>router.push('/steps4')} 
          variant="text">Шаг 4. Способ оплаты</Button>
          </ThemeProvider>
           </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </Grid>
  );
}