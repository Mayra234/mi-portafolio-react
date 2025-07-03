import { Box } from '@mui/material';
import './index.css';
import React from 'react';

const NavLink = ({ id, children, route, className, onLinkClick }) => {
  return (
    <Box className="nav">
      <a
        id={id}
        className={'link-nav ' + className}
        href={route}
        onClick={onLinkClick}
      >
        {children}
      </a>
    </Box>
  );
};
export default NavLink;
