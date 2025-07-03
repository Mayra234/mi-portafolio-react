import './index.css';
import React, { useEffect, useState } from 'react';
import { Button as MuiButton } from '@mui/material';
const CustomButton = ({
  id,
  children,
  className,
  palette,
  type,
  onClick = () => {},
  ...props
}) => {
  const [style, setStyle] = useState(props.style);

  const changePalette = () => {
    if (palette === 'primary') {
      setStyle((prevStyle) => ({ ...prevStyle, background: '#e91e63' }));
    } else if (palette === 'secondary') {
      setStyle((prevStyle) => ({ ...prevStyle, background: 'transparent' }));
    }
  };

  useEffect(() => {
    changePalette();
  }, [palette]);

  return (
    <MuiButton
      id={id}
      className={'button ' + className}
      palette={palette}
      style={style}
      type={type}
      onClick={onClick}
      sx={{ position: 'static' }}
    >
      {children}
    </MuiButton>
  );
};
export default CustomButton;
