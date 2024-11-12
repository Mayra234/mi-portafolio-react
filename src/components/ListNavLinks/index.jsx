import './index.css';
import React from 'react';
import { Box } from '@mui/material';
import NavLink from '../NavLink';
const ListNavLinks = ({ links, className }) => {
  return (
    <Box className={className}>
      {links.map((link, i) => (
        <NavLink key={i} {...link} />
      ))}
    </Box>
  );
};
export default ListNavLinks;
