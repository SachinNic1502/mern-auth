const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
app.use(express.json());


const corsOptions = {
  origin: [
    'https://mern-auth-azmczfj5e-sachinrathodnic1-gmailcoms-projects.vercel.app',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
