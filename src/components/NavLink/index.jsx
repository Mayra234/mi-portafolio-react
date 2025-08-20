import { Box } from '@mui/material';
import './index.css';
import React from 'react';

const NavLink = ({ id, children, className, onLinkClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(children);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.pushState(null, null, `#${id}`);
  };

  return (
    <Box className="nav">
      <a
        id={`nav-${id}`}
        className={'link-nav ' + className}
        href={`#${id}`}
        onClick={handleClick}
      >
        {children}
      </a>
    </Box>
  );
};

export default NavLink;
