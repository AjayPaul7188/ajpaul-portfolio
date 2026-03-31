const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
const db = new Database('portfolio.db');

// Create table
db.prepare(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT
  )
`).run();

// API route
app.post('/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;

    const stmt = db.prepare(
      `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`
    );

    const result = stmt.run(name, email, message);

    res.json({ success: true, id: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ IMPORTANT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});