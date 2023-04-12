import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BlogPagination() {
  return (
    <Stack alignItems="center" sx={{ marginTop: '64px', marginBottom: '64px' }}>
      <Pagination count={1} size="large"/>
    </Stack>
  );
}