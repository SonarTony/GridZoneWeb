
const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('./'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Football Game app running at http://0.0.0.0:${port}`);
});
