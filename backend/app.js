import express from 'express';
import connectDB from './db/Connection.js';
import LoginRoutes from './routes/LoginRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/api', LoginRoutes);

// Connect DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
