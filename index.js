const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON (not required for GET, but good to have)
app.use(express.json());

const cors = require('cors');
app.use(cors()); // Allow all origins

// Default route
app.get('/', (req, res) => {
  res.send('Hello Shalu Shree I am from Express Demo App!');
});

// Ping route
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// New route: Get name info
app.get('/name', (req, res) => {
  res.json({
    firstName: 'Shalu',
    lastName: 'Kumari',
    role: 'Backend Developer'
  });
});

// Start server
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
