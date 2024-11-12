import { Box } from '@mui/material';
import './index.css';
import React from 'react';

const Tab = ({ id, className, text, onClick, index, currentIndex }) => {
  return (
    <Box className="container-tab">
      <li onClick={onClick} id={id} className={`tab-nav-item `}>
        <a
          className={`tab-nav-link ${className} ${
            currentIndex === index ? 'active' : ''
          }`}
        >
          {text}
        </a>
      </li>
    </Box>
  );
};
export default Tab;
