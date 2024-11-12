import { Typography } from '@mui/material';
import React from 'react';

const H3 = ({ className, children, style }) => {
  return (
    <Typography className={className} style={{ style }}>
      {children}
    </Typography>
  );
};
export default H3;
