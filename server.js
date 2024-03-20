const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // Add authentication logic here
  
  res.status(200).end();
});

app.listen(3000, () => console.log('Server is running on port 3000'));
