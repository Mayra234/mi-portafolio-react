import './index.css';
import React from 'react';
import { Box } from '@mui/material';
import H2 from '../../../components/H2';
import Separator from '../../../components/Separator';
import Icon from '../../../components/Icon';
import Card from '../../../components/Card';
import { CONTACTS } from '../../../constants/contact';

export const ContactMe = () => {
  return (
    <Box id="contact" className="container-contact">
      <H2 className="title">Contáctame</H2>
      <Separator />
      <Box className="content-card-contact">
        {CONTACTS.map((contact, i) => (
          <Card key={i} palette="primary" className="contact-me" shadow border>
            <a
              href={contact.route || '#contact'}
              target={contact.route && '_blank'}
            >
              <Icon>{contact.icon}</Icon>
              <H2 className="title-contact">{contact.title}</H2>
              <p>{contact.text}</p>
            </a>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
