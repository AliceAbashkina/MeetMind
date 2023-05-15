import styles from '../../styles/Home.module.css'
import ResponsiveAppBarProfile from '../../components/BarProfile'
import Footer from '../../components/Footer'
import { Grid, Typography, Button, TextField, ThemeProvider, Box, Tabs, Tab } from '@mui/material'
import * as React from 'react';
import 'react-phone-input-2/lib/style.css'
import DrawerCompClient from '../../components/Drawer_client';
import { useRouter } from 'next/router';


export default function Load() {
    const router = useRouter();
    const [userID, setID] = React.useState(23);

    callAPI().then(data => {
        router.push({
            pathname: '/profile_client',
            query: { user: JSON.stringify(data) }
        }, '/profile_client')
    }).catch(err => {
        console.log(err);
    });

    async function callAPI() {
        let user = {
            user_id: userID
        }
        const response = await fetch('http://localhost:8210/v1/getUserInfo', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(user),
        });
        const json = await response.json();
        return json;
    }
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        </Grid>
    );
}