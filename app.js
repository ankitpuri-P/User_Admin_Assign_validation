// app.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection failed', err));

// Mount routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/assignments', assignmentRoutes); // Assignment-related routes
app.use('/admin', adminRoutes); // Admin-specific routes
app.use('/user', userRoutes); // User-specific routes

// Default route
app.get('/', (req, res) => {
  res.send('Admin Assignment Check API is Running!');
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
