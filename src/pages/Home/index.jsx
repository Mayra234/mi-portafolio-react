import React from 'react';
import { AboutMe } from './AboutMe/AboutMe';
import { Banner } from './Banner/Banner';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';
import { ContactMe } from './ContactMe/ContactMe';
import { Box } from '@mui/material';
export const Home = () => {
  return (
    <Box className="home">
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </Box>
  );
};
