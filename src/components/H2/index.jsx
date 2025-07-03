import { Typography } from '@mui/material';
import React from 'react';

const H2 = ({ className, children, fontWeight }) => {
  return (
    <Typography
      className={className}
      sx={{ fontWeight: fontWeight ? fontWeight : 'none' }}
    >
      {children}
    </Typography>
  );
};
export default H2;
