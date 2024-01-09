import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const ProductButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Add to cart</Button>
    </Stack>
  );
};
