// src/pages/Landing.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { AccessTime, Assignment, CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Track Tasks', icon: <Assignment fontSize="large" color="primary" />, description: 'Manage your daily tasks effectively.' },
  { title: 'Stay Organized', icon: <CheckCircle fontSize="large" color="primary" />, description: 'Keep your work structured and clean.' },
  { title: 'Time Management', icon: <AccessTime fontSize="large" color="primary" />, description: 'Stay on schedule and productive.' },
];

export default function Landing() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Task Tracker</Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ py: 8, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Boost Productivity with Task Tracker
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            A simple, powerful tool to help you manage your tasks, projects, and team.
          </Typography>
          <Button variant="contained" size="large" component={Link} to="/signup">
            Get Started
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {features.map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: 'center' }}>
                  {feature.icon}
                  <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ py: 4, backgroundColor: '#1976d2', color: 'white', textAlign: 'center' }}>
        <Typography variant="body1">© 2025 Task Tracker. All rights reserved.</Typography>
      </Box>
    </>
  );
}
