import { Box } from '@mui/material';
import './index.css';
import React from 'react';

const Navbar = ({ children, className }) => {
  return <Box className={'navbar ' + className}>{children}</Box>;
};
export default Navbar;
