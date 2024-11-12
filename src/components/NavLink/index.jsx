import { Box } from '@mui/material';
import './index.css';
import React from 'react';

const NavLink = ({ id, children, route, onClick, className }) => {
  return (
    <Box onClick={onClick} className="nav">
      <a id={id} className={'link-nav ' + className} href={route}>
        {children}
      </a>
    </Box>
  );
};
export default NavLink;
