import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Projects = () => {
  const [project, setProject] = useState({
    name: '',
  });
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const BASE_URL = 'http://localhost:3000';
  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/project/${id}`);
      setProject(response.data);
    } catch (error) {
      toast.error('Failed to fetch project');
      navigate('/dashboard');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`${BASE_URL}/project/${id}`, {
          projectName: project.name,
        });
        toast.success('Project updated successfully');
      } else {
        await axios.post(`${BASE_URL}/project`, {
          projectName: project.name,
        });
        toast.success('Project created successfully');
      }
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    }
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {id ? 'Edit Project' : 'New Project'}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Project Name"
              name="name"
              value={project.name}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {id ? 'Update Project' : 'Create Project'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Projects; 