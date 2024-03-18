const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // TODO: Validate email and password with your database here
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
