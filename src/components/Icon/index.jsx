import { Box } from '@mui/material';
import './index.css';
import React from 'react';

const Icon = ({ children, className }) => {
  return <Box className={'icon ' + className}>{children}</Box>;
};
export default Icon;
