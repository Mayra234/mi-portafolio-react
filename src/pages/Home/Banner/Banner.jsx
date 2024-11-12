import React from 'react';
import './index.css';
import { Box } from '@mui/material';
import H3 from '../../../components/H3';
import H1 from '../../../components/H1';
import CustomButton from '../../../components/Button';

export const Banner = () => {
  return (
    <Box id="banner" className="content-banner">
      <Box className="banner">
        <Box className="welcome-text">
          <section>
            <H3 className="text-h3">Bienvenido a mi sitio web</H3>
            <H1 className="text-h1">Alejandra Diavanera</H1>
            <CustomButton palette="primary">
              <a href="#contact">Contáctame</a>
            </CustomButton>
          </section>
        </Box>
      </Box>
    </Box>
  );
};
