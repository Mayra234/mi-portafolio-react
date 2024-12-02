import { Typography } from '@mui/material';
import React from 'react';

const H3 = ({ className, children }) => {
  return <Typography className={className}>{children}</Typography>;
};
export default H3;
