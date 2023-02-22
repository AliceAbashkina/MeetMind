import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from "@material-ui/core/Avatar";
import styles from "../../styles/Home.module.css"

export default function ButtonPeople() {
return(
<Grid item sx={{flexDirection:{xs:'column', md:'row'}, display:'flex', alignItems:'center'}}>
          <Button className={styles.buttonPeople} variant="contained" size='large' sx={{height:'88px', borderRadius:'80px', backgroundColor:'#514573', padding:'16px 24px', width: '276px', marginRight:'30px', textAlign:'left'}} 
          startIcon={<Avatar src={'button_portrait4.png'} style={{width:'56px', height:'56px', textAlignLast:'left'}} />}><span style={{textTransform:'none'}}>Сергей Иванов
          <br/><span style={{opacity: '0.7', fontWeight:'100'}}>Маркетолог</span></span></Button>
          <Grid item mt={{xs:4, md:0}} sx={{display:'flex',flexDirection:{xs:'corowlumn', md:'row'}}}>
          <img className={styles.buttonPeopleAva} src='button_portrait3.png' height='56' style={{marginRight:'30px'}}/>
          <img className={styles.buttonPeopleAva} src='button_portrait2.png' height='56' style={{marginRight:'30px'}}/>
          <img className={styles.buttonPeopleAva} src='button_portrait1.png' height='56' style={{marginRight:'30px'}}/>
          </Grid>
          </Grid>
);
}

