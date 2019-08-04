const express = require('express');
const actionRouter = require('./routes/actionRouter.js');
const projectRouter = require('./routes/projectRouter.js');

const server = express();

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.use(express.json());

server.get('/', (req, res) =>{
     res.status(200).json({message: 'Hello from sprint challenge!'})
 });

 module.exports = server;