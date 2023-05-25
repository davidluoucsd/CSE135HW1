const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const initialBrowserData = {};

app.get('/api/static', (req, res) => {
  res.json(Object.values(initialBrowserData));
});

app.get('/api/static/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  const sessionData = initialBrowserData[sessionId];
  res.json(sessionData || {});
});

app.post('/api/static/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  const newEntry = req.body;
  initialBrowserData[sessionId] = newEntry;
  res.status(201).json(newEntry);
});

app.delete('/api/static/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  delete initialBrowserData[sessionId];
  res.status(204).send();
});

app.put('/api/static/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  const updatedEntry = req.body;
  initialBrowserData[sessionId] = updatedEntry;
  res.status(200).json(updatedEntry);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});


const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database.js');

const app = express();
app.use(bodyParser.json());

app.get('/api/static', (req, res) => {
  db.query('SELECT * FROM myTable', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/api/static/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  db.query('SELECT * FROM myTable WHERE sessionId = ?', [sessionId], (error, results) => {
    if (error) throw error;
    res.json(results[0] || {});
  });
});

app.post('/api/static/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  const newEntry = req.body;
  db.query('INSERT INTO myTable SET ?', newEntry, (error, results) => {
    if (error) throw error;
    res.status(201).json({ id: results.insertId, ...newEntry });
  });
});

app.delete('/api/static/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  db.query('DELETE FROM myTable WHERE sessionId = ?', [sessionId], (error, results) => {
    if (error) throw error;
    res.status(204).send();
  });
});

app.put('/api/static/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  const updatedEntry = req.body;
  db.query('UPDATE myTable SET ? WHERE sessionId = ?', [updatedEntry, sessionId], (error, results) => {
    if (error) throw error;
    res.status(200).json(updatedEntry);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});





