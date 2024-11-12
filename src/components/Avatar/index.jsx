import { Box } from '@mui/material';
import './index.css';
import React from 'react';

const Avatar = ({ image, mainText, className }) => {
  return (
    <Box className={'avatar ' + className}>
      <a className="a">
        <span className="image-avatar">
          {image ? (
            <img
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
              }}
              src={image}
            />
          ) : (
            mainText[0]
          )}
        </span>
      </a>
      <Box>
        <span className="avatar-name">{mainText}</span>
      </Box>
    </Box>
  );
};
export default Avatar;
