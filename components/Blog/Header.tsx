import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import buttonS from './../Buttons/ButtonSmall'
import { useRouter } from 'next/router';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function HeaderBlog(props: HeaderProps) {
  const { sections, title } = props;

  const router = useRouter();

  return (
    <React.Fragment>
      <Toolbar disableGutters sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <img src='Logo.png' alt='logo' width='30px' height='53px' style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '22px', cursor: 'pointer' }}
          onClick={() => router.push('/')} />
        <Typography onClick={() => router.push('/blog')} sx={{ fontSize: { xs: '20px', md: '26px' }, mr: { xl: '34px', md: '20px' } }} variant="h1" style={{
          color: '#4E4E4E',
          fontFamily: 'Comfortaa', fontWeight: 600, fontStyle: 'normal', hyphens: 'auto', transform: 'scaleX(1)', letterSpacing: '2px', cursor: 'pointer'
        }}>MeetMind.Блог</Typography>

        <Box sx={{ flexGrow: 1 }}>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <ThemeProvider theme={buttonS}>
            <Button onClick={() => router.push('/authorization')}>Авторизация</Button>
          </ThemeProvider>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}