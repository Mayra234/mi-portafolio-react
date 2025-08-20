import React from 'react';
import './index.css';
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Typography } from '@mui/material';
import H2 from '../../../components/H2';
import Separator from '../../../components/Separator';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import { PROJECTS } from '../../../constants/projects';
import H3 from '../../../components/H3';

export const Projects = () => {
  return (
    <Box id="project" className="container-projects">
      <H2 className="text-about-h2">Proyectos</H2>
      <Separator />
      <Box className="content-cards-project">
        {PROJECTS.map((project, i) => (
          <Card key={i} palette="secondary" className="project">
            <Icon>{project.icon}</Icon>
            <H3 className="title-project" fontWeight={'bold'}>
              {project.title}
            </H3>
            <p className="date">{project.date}</p>
            <Box className="text-card-project">
              <Typography>{project.text}</Typography>
            </Box>
            <Box className="icon-nav">
              {project.siteUrl && (
                <Button
                  href={project.siteUrl}
                  target="_blank"
                  className="button-project"
                  sx={{
                    '&:hover': {
                      backgroundColor: '#b8929fff',
                      color: 'white',
                    },
                  }}
                >
                  <PublicIcon sx={{ color: '#e91e63' }} />
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  className="button-project"
                  sx={{
                    '&:hover': {
                      backgroundColor: '#b8929fff',
                      color: 'white',
                    },
                  }}
                >
                  <GitHubIcon sx={{ color: '#e91e63' }} />
                </Button>
              )}
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
