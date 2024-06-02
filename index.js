const express = require('express')
require('dotenv').config()
const app = express();

const port = 3000 | process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send("Sumant Pandey");
})

app.get('/login' , (req, res) => {
    res.send('<h1>Please Login</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})