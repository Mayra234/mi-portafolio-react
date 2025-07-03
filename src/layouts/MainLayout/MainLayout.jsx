import React, { useState } from 'react';
import './index.css';
import me from '../../assets/images/me.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import CustomButton from '../../components/Button';
import Header from '../../components/Header'; // en lugar de { Header }
import Navbar from '../../components/Navbar'; // en lugar de { Navbar }
import Avatar from '../../components/Avatar'; // en lugar de { Avatar }
import Icon from '../../components/Icon'; // en lugar de { Icon }
import Footer from '../../components/Footer'; // en lugar de { Footer }
import ListNavLinks from '../../components/ListNavLinks';

const MainLayout = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const handleLinkClick = () => {
    setMenu(false); // Establece el estado a 'false' para cerrar siempre el menú
  };

  return (
    <>
      <Box className="main-layout">
        <Header>
          <Navbar className="menu-nav">
            <Avatar mainText="Mayra" image={me} />
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ListNavLinks
                className={`list-links ${menu ? 'active' : ''}`}
                links={links}
                onLinkClick={handleLinkClick}
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
    </>
  );
};
export default MainLayout;
const links = [
  {
    children: 'Inicio',
    route: '#banner',
  },
  {
    children: 'Sobre mi',
    route: '#about-me',
  },
  {
    children: 'Hoja de vida',
    route: '#skills',
  },
  {
    children: 'Proyectos',
    route: '#project',
  },
  {
    children: 'Contacto',
    route: '#contact',
  },
];
