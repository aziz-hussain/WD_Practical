const express = require('express');
app = express();
port = 9000;

app.get('/', (req, res)=> {
    res.send('this is the root directory');
});

app.get('/books', (req, res) => {
    res.send('this is book related information!')
});

app.get('/games', (req, res) => {
    res.send('this is games related information!')
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

