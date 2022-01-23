
const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static('./dist/portfolio'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/portfolio'});
});

// default Heroku port
app.listen(process.env.PORT || 8080)