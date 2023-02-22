import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface FeaturedPostProps {
  post: {
    id: BigInteger;
    lead: string;
    image: string;
    imageText: string;
    link: string;
    title: string;
    author: string;
    date: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <Box>
        <Link href={'http://localhost:3000/blog/' + post.id} color="inherit" underline="none">
          <Box
            sx={{
              position: 'relative',
              padding: '0 0 40.54% 0',
              borderRadius: '40px',
              overflow: 'hidden'
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
              src='https://source.unsplash.com/random' alt={post.imageText} />
          </Box>
        </Link>
        <Grid container>
          <Grid item md={12}>
            <Box
              sx={{
                position: 'relative',
                p: { md: 1 },
                pr: { md: 0 },
              }}
            >
              <Typography>
                Автор: {post.author}, {post.date}
              </Typography>
              <Link href={'http://localhost:3000/blog/' + post.id} color="inherit" underline="none">
                <Typography component="h4" color="inherit" sx={{ lineHeight: '50px', fontSize: '36px', marginBottom: '26px', fontWeight: '700', marginTop: '14px' }}>
                  {post.title}
                </Typography>
              </Link>
              <Link href={'http://localhost:3000/blog/' + post.id} color="inherit" underline="none">
                <Typography color="inherit" paragraph sx={{ lineHeight: '44px', fontSize: '24px', fontWeight: '400', marginBottom: '0' }}>
                  {post.lead}
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}