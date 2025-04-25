import { Box, Typography, Button, Stack, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import UserCard from './UserCard';
import image1 from '../assets/user1.jpg'; // replace with actual image paths
import image2 from '../assets/user2.jpg';
import image3 from '../assets/user3.jpg';
import image4 from '../assets/user4.jpg';
import image5 from '../assets/user5.jpg';
import image6 from '../assets/user6.jpg';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    
    <Box sx={{ backgroundColor: '#0f0f1b', color: 'white', py: 6 }}>
      <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ maxWidth: '500px' }}>
          <Typography variant="h2">Smart Solutions for Smarter Learning.</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}   onClick={() => navigate('/role')}
          >Role</Button>
          <Typography variant="body1" sx={{ mt: 4 }}>
            Our Student Management System (SMS) offers intelligent, user-friendly tools designed to streamline academic administration, enhance communication, and support student success.
            With real-time data access, automated processes, and seamless integration, SMS brings smarter learning to life through smarter solutions.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
          {[image1, image2, image3, image4, image5, image6].map((img, i) => (
            <UserCard key={i} src={img} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}



