import styles from '../styles/Home.module.css'
import { Grid } from '@mui/material'

export default function Footer(){
    return(
        <Grid container  columns={12} className={styles.footer}>
          <Grid item xs={12} sx={{flexDirection: {md:'row',xs:'column'},fontSize: { xs:'14px' }}} style={{ display: 'flex', fontFamily:'Roboto', color:'#4E4E4E' }}>
            <a>© 2022 MeetMind</a>
            <a>Для психологов</a>
            <a>Для бизнеса</a>
            <a>Подарочные сертификаты</a>
            <a>Магазин</a>
            <a>Акции</a>
            <a>Блог</a>
          </Grid>
        </Grid>
    );
}