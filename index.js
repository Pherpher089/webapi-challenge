const server = require('./server.js');
const express = require('express');

const port = 4000;

server.listen(4000, ()=> console.log(`Magic happening on port ${port}`));
