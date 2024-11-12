import React, { useState } from 'react';
import './index.css';
import { Box } from '@mui/material';
import H2 from '../../../components/H2';
import Separator from '../../../components/Separator';
import Tabs from '../../../components/Tabs';
import Card from '../../../components/Card';
import { SKILLS } from '../../../constants/skills';
import SkillBar from '../../../components/SkillBar';
import H1 from '../../../components/H1';
import H3 from '../../../components/H3';

export const Skills = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Box id="skills" className="content-skills">
      <H2>Habilidades</H2>
      <Separator />
      <Tabs
        tabs={[
          {
            text: 'Habilidades',
          },
          { text: 'Estudios' },
        ]}
        onChange={(index) => setCurrentTab(index)}
      />
      {currentTab === 0 && (
        <Box className="tab-container">
          <Card palette="primary" className="content-skill" border shadow>
            {SKILLS.map((skill, i) => (
              <SkillBar
                key={i}
                mainText={skill.name}
                percentage={skill.score}
              />
            ))}
          </Card>
        </Box>
      )}
      {currentTab === 1 && (
        <Box className="tab-container tab-study">
          {STUDIES.map((study, i) => (
            <Card key={i} palette="primary" shadow border>
              <Box className="title-card">
                <H1 className="title-study">{study.title}</H1>
                <H3>{study.placeAndDate}</H3>
              </Box>
              <p></p>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};
