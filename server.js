// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/postRoutes');

require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Define routes
app.get('/', (req, res) => res.send('Blog Platform API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
