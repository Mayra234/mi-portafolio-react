import React, { useEffect, useState } from 'react';
import './index.css';
import me from '../../assets/images/me.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import CustomButton from '../../components/Button';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Avatar from '../../components/Avatar';
import Icon from '../../components/Icon';
import Footer from '../../components/Footer';
import ListNavLinks from '../../components/ListNavLinks';

// Componente ListNavLinks actualizado
const MainLayout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
    setMenu(false);
  };

  const links = [
    { children: 'Inicio', id: 'banner' },
    { children: 'Sobre mi', id: 'about-me' },
    { children: 'Hoja de vida', id: 'skills' },
    { children: 'Proyectos', id: 'project' },
    { children: 'Contacto', id: 'contact' },
  ];

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
    const handleScroll = () => {
      const sections = ['banner', 'about-me', 'skills', 'project', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.getBoundingClientRect().top <= 100 &&
          element.getBoundingClientRect().bottom >= 100
        ) {
          setSelectedLink(
            section === 'banner'
              ? 'Inicio'
              : section === 'about-me'
              ? 'Sobre mi'
              : section === 'skills'
              ? 'Hoja de vida'
              : section === 'project'
              ? 'Proyectos'
              : 'Contacto'
          );
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box className="main-layout">
      <Header>
        <Navbar className="menu-nav">
          <Avatar mainText="Mayra" image={me} />
          <Box
            sx={{
              display: { xs: 'inherit', sm: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ListNavLinks
              className={`list-links ${menu ? 'active' : ''}`}
              links={links}
              onLinkClick={handleLinkClick}
              selectedLink={selectedLink}
            />
          </Box>
        </Navbar>
        <CustomButton
          className={`bar-menu ${menu ? 'rotate-open' : 'rotate-close'}`}
          palette="secondary"
          id="button-menu"
          onClick={toggleMenu}
        >
          <Icon>
            <MenuIcon />
          </Icon>
        </CustomButton>
      </Header>
      <Box>{children}</Box>
      <Footer>{new Date().getFullYear()}</Footer>
    </Box>
  );
};
export default MainLayout;
