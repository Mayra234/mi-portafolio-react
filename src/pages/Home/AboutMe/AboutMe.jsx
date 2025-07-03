import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import H2 from '../../../components/H2';
import H3 from '../../../components/H3';
import './index.css';
import me from '../../../assets/images/me.jpg';
export const AboutMe = () => {
  useEffect(() => {
    const elemento = document.getElementsByClassName('list-links');
    document.addEventListener('focus', () => {
      elemento.classList.add('activeLink');
    });
    document.addEventListener('blur', () => {
      elemento.classList.remove('activeLink');
    });
  }, []);
  return (
    <Box id="about-me" className="container-about">
      <Box className="image-about-me">
        <img className="image-about" src={me} />
      </Box>
      <Box className="text-about">
        <H2 className="text-about-h2">Alejandra Diavanera</H2>
        <H3 className="text-about-h3">
          Desarrolladora Frontend Javascript + ReactJS
        </H3>
        <Typography className="p">
          Desarrolladora Frontend con 3 años de experiencia creando aplicaciones
          web utilizando HTML, CSS, Javascript, Typescript, NextJS, Redux y
          ReactJS. He trabajado en proyectos de carácter académico y laboral
          aplicando la metodología scrum, construyendo componentes atómicos en
          Javascript y React mediante Storybook y aplicando patrones de diseño
          para mantener un código legible y evitar malas prácticas de
          desarrollo. Administro varias bibliotecas para ayudar a optimizar y
          mejorar los diseños de proyectos, incluidas Bootstrap y Material UI.
          Interesada en seguir aprendiendo metodologías organizadas de
          desarrollo de software para la producción de tecnologías escalables.
        </Typography>
      </Box>
    </Box>
  );
};
