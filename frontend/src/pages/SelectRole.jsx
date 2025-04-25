import React from 'react';
import logo from '../assets/react.svg';
import {
  Grid,
  Paper,
  Box,
  Container,
  Typography,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SelectRole = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: {
      scale: 1.05,
      boxShadow: '0px 8px 25px rgba(36, 163, 248, 0.5)',
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const roles = [
    {
      title: 'Admin',
      description: 'Login as an administrator to access the dashboard to manage app data.',
      icon: <AccountCircle fontSize="large" />,
      path: '/admin',
    },
    {
      title: 'Student',
      description: 'Login as a student to explore course materials and assignments.',
      icon: <School fontSize="large" />,
      path: '/student',
    },
    {
      title: 'Teacher',
      description: 'Login as a teacher to create courses, assignments, and track student progress.',
      icon: <Group fontSize="large" />,
      path: '/teacher',
    },
  ];

  return (
    <StyledContainer>
      <Container>
        <Header>
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            style={{ width: 70 }}
          />
          <Typography variant="h4" sx={{ color: '#3AA6FA', fontWeight: 'bold', mt: 2 }}>
            Student Management System
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#ccc', mb: 4 }}>
            Select your role to get started
          </Typography>
        </Header>
        <Grid container spacing={3} justifyContent="center">
          {roles.map((role, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onClick={() => navigate(role.path)}
                style={{ cursor: 'pointer' }}
              >
                <StyledPaper elevation={3}>
                  <Box mb={2}>{role.icon}</Box>
                  <StyledTypography>{role.title}</StyledTypography>
                  <Typography variant="body2" sx={{ color: '#bbb' }}>
                    {role.description}
                  </Typography>
                </StyledPaper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default SelectRole;

// Styled components
const StyledContainer = styled.div`
  background: linear-gradient(to bottom right, #111, #1A171E, #111);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
  
`;

const StyledPaper = styled(Paper)`
  padding: 30px 20px;
  text-align: center;
  background-color: #1F1F38;
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
    &:hover {
    background-color: #1A171E	; 
  }

`;

const StyledTypography = styled.h2`
  color: #3AA6FA;
  margin-bottom: 10px;
  font-size: 1.6rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;