import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import MessageIcon from '@mui/icons-material/Message';
export const CONTACTS = [
  {
    icon: <PhoneIcon />,
    title: 'Teléfono',
    text: '3126098992',
  },
  {
    icon: <MarkAsUnreadIcon />,
    title: 'Linkedin',
    text: 'Alejandra Diavanera',
    route: 'https://www.linkedin.com/in/alejandra-diavanera/',
  },
  {
    icon: <MessageIcon />,
    title: 'Email',
    text: 'alejandradiavanera@gmail.com',
  },
];
