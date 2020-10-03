const express = require('express');
const app = express();

app.use(express.static(__dirname + '/www'));

app.listen('3000');
console.log('working on 3000');
