import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';

export default function TeacherLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let isValid = true;
    let newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Enter a valid email';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with login logic
      console.log('Logging in with:', { email, password });
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#1A171E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="xs">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3, bgcolor: '#1A171E' }}>
          <Typography variant="h4" align="center" sx={{ color: '#3AA6F4', fontWeight: 600, mb: 1 }}>
            Teacher Login
          </Typography>
          <Typography align="center" sx={{ color: '#3AA6F4', mb: 3 }}>
            Welcome! Please enter your details
          </Typography>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              InputLabelProps={{ style: { color: '#3AA6F4' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#3AA6F4' },
                  '&:hover fieldset': { borderColor: '#3AA6F4' },
                  '&.Mui-focused fieldset': { borderColor: '#3AA6F4' },
                },
              }}
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              margin="normal"
              InputLabelProps={{ style: { color: '#3AA6F4' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#3AA6F4' },
                  '&:hover fieldset': { borderColor: '#3AA6F4' },
                  '&.Mui-focused fieldset': { borderColor: '#3AA6F4' },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                backgroundColor: '#3AA6F4',
                color: '#1A171E',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#349ee3',
                },
              }}
            >
              LOGIN
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}