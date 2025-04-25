import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await User.findOne({ email, role: 'admin' });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Admin login successful', admin });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
