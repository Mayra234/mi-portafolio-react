import React from 'react';
import './index.css';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Typography } from '@mui/material';
import H2 from '../../../components/H2';
import Separator from '../../../components/Separator';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';

import { PROJECTS } from '../../../constants/projects';
import H3 from '../../../components/H3';
import CustomButton from '../../../components/Button';

export const Projects = () => {
  return (
    <Box id="project" className="container-projects">
      <H2 className="title">Proyectos</H2>
      <Separator />
      <Box className="content-cards-project">
        {PROJECTS.map((project, i) => (
          <Card key={i} palette="secondary" className="project">
            <Icon>{project.icon}</Icon>
            <H3 className="title-project">{project.title}</H3>
            <p className="date">{project.date}</p>
            <Box className="text-card-project">
              <Typography>{project.text}</Typography>
            </Box>
            <Box className="icon-nav">
              {project.siteUrl && (
                <a href={project.siteUrl} target="_blank">
                  <CustomButton className="icons-project">
                    <Icon>
                      <ReplyAllIcon />
                    </Icon>
                  </CustomButton>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank">
                  <CustomButton className="icons-project">
                    <Icon>
                      <GitHubIcon />
                    </Icon>
                  </CustomButton>
                </a>
              )}
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
