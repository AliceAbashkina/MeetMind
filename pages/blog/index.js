import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Blog/Header';
import MainFeaturedPost from '../../components/Blog/MainFeaturedPost';
import FeaturedPost from '../../components/Blog/FeaturedPost';
import Footer from '../../components/Blog/Footer';
import Pagination from '../../components/Blog/Pagination';
import Typography from '@mui/material/Typography';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: '“Просто поспи” - не работает.',
  description:
    "«У меня бессонница». Как окружающие чаще всего реагируют на это признание? Люди с нарушениями сна рассказали блогу MeetMind, почему такие реакции могут причинять боль.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  link: '#',
  author: 'Вера Иванова',
  date: '17 июня',
};

const theme = createTheme();

export default function Blog( {list} ) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <Typography component='h1' sx={{ lineHeight: '76px', fontSize: '64px', fontWeight: '700', textAlign: 'center', color: '#514573', marginBottom: '64px', marginTop: '64px' }}>Блог MeetMind: актуальные направления в психотерапии</Typography>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container rowSpacing={8} columnSpacing={4}>
            {list.articles.map((item) => (
              <FeaturedPost key={item.id} post={item} />
            ))}
          </Grid>
          <Pagination />
        </main>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </ThemeProvider>
  );
}

export const getStaticProps = async () => {

  const setting = {
    start: 1,
    length: 10,
    search: "password",
  };

  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  const response = await fetch('https://89.110.53.157:19525/v1/listArticle', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(setting),
  });
  const list = await response.json();

  console.log(list)

  return {
    props: { list },
    revalidate: 1,
  };
};