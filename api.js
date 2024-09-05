// api.js

const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, this is my API!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
