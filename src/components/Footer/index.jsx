import { Box } from '@mui/material';
import './index.css';
import React from 'react';
const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <Box className="content-footer">{children}</Box>
    </footer>
  );
};
export default Footer;
