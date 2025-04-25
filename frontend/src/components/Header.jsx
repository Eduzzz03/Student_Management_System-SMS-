import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    const path = item.toLowerCase(); // makes 'Admin' => 'admin'
    navigate(`/${path}`);
  };

  return (
    <AppBar position="static" sx={{ background: '#0f0f1b', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="white">SMS</Typography>
        <Box>
          {['About', 'Admin', 'Student', 'Teachers'].map((item) => (
            <Button
              key={item}
              onClick={() => handleNavigation(item)}
              sx={{ color: 'white', mx: 1 }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

