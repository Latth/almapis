const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Parse the incoming request

app.use(express.json());

w