import { Box } from '@mui/material';
import './index.css';
import React, { useEffect, useState } from 'react';

const Header = ({ children, className }) => {
  const [addStyleScroll, setAddStyleScroll] = useState(false);

  useEffect(() => {
    const styleScrollHeader = () => {
      setAddStyleScroll(window.scrollY > 0 && !addStyleScroll);
    };

    window.addEventListener('scroll', styleScrollHeader);
  }, []);

  return (
    <Box className={className}>
      <Box className={`header ${addStyleScroll ? 'scroll' : ''}`}>
        {children}
      </Box>
    </Box>
  );
};
export default Header;
