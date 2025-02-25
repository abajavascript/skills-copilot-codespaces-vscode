// Create web server
// Run: node comments.js
// Output: http://localhost:3000

// Import modules
var express = require('express');
var app = express();

// Set up the server
app.get('/', function(req, res) {
    res.send('Hello World');
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});