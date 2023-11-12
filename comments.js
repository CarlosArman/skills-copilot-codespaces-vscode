// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express app
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/posts/:id/comments', (req, res) => {
    res.send([
        {
            id: 1,
            content: 'Hello world!',
            postId: req.params.id,
        },
    ]);
});

// Start server
app.listen(4001, () => {
    console.log('Comments server listening on port 4001');
});
