const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;
const SALT_ROUNDS = 10;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CarShareMC2'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database.');
});

app.use(bodyParser.json());

// Simple message endpoints
app.get('/message', (req, res) => {
  res.send('Ova poruka je poslana sa lokalnog servera');
});
app.get('/poruka', (req, res) => {
  res.send('Ova poruka je');
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const sql = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
    db.query(sql, [email, username, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error inserting data into database:', err);
        return res.status(500).json({ message: 'Failed to register user' });
      }
      res.status(201).json({ message: 'Registration successful' });
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const sql = 'SELECT password FROM users WHERE username = ? OR email = ?';
    db.query(sql, [username, username], async (err, results) => {
      if (err) {
        console.error('Error fetching user:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      const match = await bcrypt.compare(password, results[0].password);
      if (match) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Incorrect password' });
      }
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
