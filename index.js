const express = require('express');
const posts = require('./posts');
const app = express();


app.get('/', (req, res) => {
    res.send('API is running!');
});

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});


