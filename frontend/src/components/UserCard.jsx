import { Card, CardMedia } from '@mui/material';

export default function UserCard({ src }) {
  return (
    <Card sx={{
      borderRadius: '50px',
      overflow: 'hidden',
      width: 100,
      height: 180,
      m: 1
    }}>
      <CardMedia component="img" image={src} alt="User" sx={{ height: '100%', objectFit: 'cover' }} />
    </Card>
  );
}



