import { Typography } from '@mui/material';
import React from 'react';

const H3 = ({ className, children, fontWeight }) => {
  return (
    <Typography
      sx={{ fontWeight: fontWeight ? fontWeight : 'none' }}
      className={className}
    >
      {children}
    </Typography>
  );
};
export default H3;
