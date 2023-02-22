import { Grid, ThemeProvider, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import Text from '../components/Headers/Text';

const CalendarContainer = styled.div`
.react-calendar {
    width: 452px;
    @media (max-width: 768px) {
      width: 100%;
    }
    background: none;
    font-family: 'Roboto';
    font-size: 16px;
}
/* ~~~ button styles ~~~ */
button {
  margin: 3px;
  border: 0;
  border-radius: 3px;
  color: #4E4E4E;
  padding: 0;
  background: none;
  font-family: 'Roboto';
  font-size: 16px;
}

.react-calendar__month-view__weekdays__weekday {
  background: #FFA630;
  border-radius: 10px;
  height: 23px;
  color: #FFFFFF;
  margin-bottom: 15px;
  margin-right: 6px;
  display: flex;
  place-content: center;
  flex-basis: 12.6% !important;
}
.react-calendar__month-view__days__day {
  border: 1px solid #FFA630;
  text-align: center;
  border-radius: 10px;
  height: 23px;
  margin-bottom: 15px;
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-right: 3px;
    flex-basis: 12% !important;
  }
  flex-basis: 10% !important;
}

.react-calendar__navigation__prev-button{
  color: #FFA630;
  font-size: 40px !important;
}

.react-calendar__navigation__prev2-button{
  display: none;
}

.react-calendar__navigation__next-button{
  color: #FFA630;
  font-size: 40px !important;
}

.react-calendar__navigation__next2-button{
  display: none;
}

abbr[title]{
  text-decoration: none !important;
}

`;
function CalendarSchedule() {

  return (
    <>
        <Grid item xs={3}  sx={{display: {xs: 'none', md: 'flex'}}} />
        <Grid item xs={12} md={9} sx={{ paddingLeft: {xs:'0 !important', md:'32px'}, paddingTop: { md: '10px !important'}, display:'flex', flexDirection: 'column'}}>
        <ThemeProvider theme={Text}>
          <Typography variant="h6">Выберите дату и время сеанса</Typography>
          <Typography variant="h6" sx={{fontFamily: 'RobotoLight', marginTop: '5px'}}>Часовой пояс: </Typography>
          </ThemeProvider>
        </Grid>
    <Grid item xs={3}  sx={{display: {xs: 'none', md: 'flex'}}} />
    <Grid item xs={12} md={9} sx={{ paddingTop: '0 !important', display:'flex', paddingLeft: {xs:'0 !important', md:'32px'}}}>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </Grid>
    </>
  );
};
export default CalendarSchedule;