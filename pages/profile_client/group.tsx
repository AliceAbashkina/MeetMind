import { Grid } from "@mui/material";
import React from "react";
import ResponsiveAppBarProfile from "../../components/BarProfile";
import DrawerCompClient from "../../components/Drawer_client";
import Footer from "../../components/Footer";
import styles from '../../styles/Home.module.css'


export default function Calendar(this: any) {
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
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        </Grid>
    );
}