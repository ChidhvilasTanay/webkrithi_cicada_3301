const express = require('express')
const app = express();
app.use('/', require('./data'));
app.listen(8080, (req, res) => {
    console.log('server at http://localhost:8080');
});