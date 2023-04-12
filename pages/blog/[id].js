import * as React from 'react';
import Footer from '../../components/Blog/Footer';
import Header from '../../components/Blog/Header';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const theme = createTheme();

export default function Article({ article }) {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Blog" />
                    <main>
                        <Typography component='h1' sx={{ lineHeight: '76px', fontSize: '44px', fontWeight: '700', textAlign: 'left', color: '#514573', marginBottom: '26px', marginTop: '64px' }}>Блог / {article.title}</Typography>
                        <Typography sx={{ fontWeight: '300', fontSize: '14px'}}>
                            Автор: {article.author}, {article.date}
                        </Typography>
                        <Box
                            sx={{
                                position: 'relative',
                                padding: '0 0 40.54% 0',
                                borderRadius: '40px',
                                overflow: 'hidden',
                                marginBottom: '78px',
                                marginTop: '38px' 
                            }}
                        >
                            <img style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                left: '0',
                                top: '0'
                            }}
                                src='https://source.unsplash.com/random' alt={article.imageText} />
                        </Box>
                        <Box
                            sx={{
                                lineHeight: '50px',
                                fontWeight: '400',
                                fontSize: '28px',
                                paddingBottom: '120px',
                                borderBottom: '2px solid #514573',
                                marginBottom: '80px'
                            }}
                        >
                            {article.content}
                        </Box>
                    </main>
                    <Footer
                        title="Footer"
                        description="Something here to give the footer a purpose!"
                    />
                </Container>
            </ThemeProvider>
        </div>
    );
}

export const getStaticProps = async (context) => {

    const setting = {
        article_id: context.params.id
    }
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //prod delete

    const response = await fetch('https://89.110.53.157:19525/v1/singleArticle', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(setting),
    });
    const article = await response.json();

    return {
        props: { article },
        revalidate: 1,
    };
};

export async function getStaticPaths() {

    // Вызываем внешнюю конечную точку API для получения постов
    const setting = {
        start: 1,
        length: 10,
        search: "password",
    };

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //prod delete

    const response = await fetch('https://89.110.53.157:19525/v1/listArticle', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(setting),
    });
    const articles = await response.json();

    // Получаем на основе постов пути, которые нужно предварительно отрисовать
    const paths = articles.articles.map((item) => ({
        params: { id: item.id.toString() },
    }));

    // В процессе сборки мы будем предварительно отрисовывать только эти пути
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}