const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/public/script.js');
});

app.get('/saveResponse/:response', (req, res) => {
    const response = req.params.response;

    // Append the response to a file (responses.html)
    fs.appendFile('responses.html', `<p>Julia clicked: ${response}</p>\n`, (err) => {
        if (err) throw err;
        console.log(`Response saved: ${response}`);
    });

    res.send('Response saved!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
