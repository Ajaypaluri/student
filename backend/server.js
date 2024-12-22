// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
// require('dotenv').config();

// // Initialize Express app
// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000', // Frontend URL
// }));
// app.use(express.json()); // Replaces body-parser

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the API!');
// });

// // User-related routes
// app.use('/api/users', userRoutes);

// // Start server
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
}));
app.use(express.json()); // Replaces body-parser

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Use user routes
app.use('/api/users', userRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
