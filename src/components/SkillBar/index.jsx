import { Box, Typography } from '@mui/material';
import './index.css';
import React from 'react';
const SkillBar = ({ percentage, mainText }) => {
  return (
    <Box className="skill-bar">
      <Typography className="skill-bar-title">{mainText}</Typography>
      <Typography className="skill-bar-percentage">{percentage}%</Typography>
      <Box className="container-skill-bar">
        <Box
          className="skill-bar-child"
          style={{ '--width': `${percentage}%` }}
        ></Box>
      </Box>
    </Box>
  );
};
export default SkillBar;
