import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Grid container columns={12}>
      <Grid item xs={12} sx={{ flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'space-between', alignItems: 'center', fontSize: { xs: '14px' } }} style={{ display: 'flex', fontFamily: 'Roboto', color: '#4E4E4E' }}>
        <a>© 2022 MeetMind</a>
        <Box>
          <IconButton><FacebookIcon /></IconButton>
          <IconButton><TelegramIcon /></IconButton>
          <IconButton><GoogleIcon /></IconButton>
          <IconButton><InstagramIcon /></IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}