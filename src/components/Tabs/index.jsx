import PropTypes from 'prop-types';
import Tab from '../Tab';
import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const Tabs = ({ className, tabs, onChange = () => {} }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const onClickTab = (index) => {
    setCurrentTab(index);
  };

  useEffect(() => {
    onChange(currentTab);
  }, [currentTab]);

  return (
    <Box className="content-tabs">
      <ul className={'tabs ' + className}>
        {tabs.map((tab, index) => (
          <Tab
            {...tab}
            currentIndex={currentTab}
            index={index}
            key={index}
            onClick={() => onClickTab(index)}
          />
        ))}
      </ul>
    </Box>
  );
};
export default Tabs;
Tabs.propTypes = {
  tabs: PropTypes.array,
  onChange: PropTypes.func,
};
