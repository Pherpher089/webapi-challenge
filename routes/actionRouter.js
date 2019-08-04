const express = require('express');
const actionModel = require('../data/helpers/actionModel.js');

const actionRouter = express.Router();

actionRouter.get('/', async (req, res) => {
    try {
        const actions = await actionModel.get();
        res.status(200).json(actions)
    } catch ({message}) {
        res.status(500).json(message)
    }
})

actionRouter.get('/:id', async (req, res) => {
    try {
        const action = await actionModel.get(req.params.id);
        res.status(200).json(action)
    } catch ({message}) {   
        res.status(500).json(message)
    }
})

actionRouter.post('/', async (req, res) => {
    const {project_id, description, notes} = req.body;
    console.log(req.body)
    if(!project_id || !description || !notes){ 
        res.status(422).json({errorMessage: 'Please provide a description and notes as well as the project ID.'})
    }

    try {
        const actionAdded = await actionModel.insert(req.body);
        res.status(201).json(actionAdded);
        
    } catch ({message}) {
        res.status(500).json(message);
    }
})

actionRouter.put('/:id', async (req, res) => {
    const {project_id, description, notes} = req.body;

    if(!project_id || !description || !notes){ 
        res.status(422).json({errorMessage: 'Please provide a description and notes as well as the project ID.'})
    }

    try {
        const actionChanged = await actionModel.insert(req.params.id, {description});
        res.status(201).json(actionChanged);
    } catch ({message}) {
        res.status(500).json(message)
    }
})

actionRouter.delete('/:id', async (req, res) => {

    try {
        const actionAdded = await actionModel.remove(req.params.id);
        res.status(201).json(actionAdded);
    } catch ({message}) {
        res.status(500).json(message)
    }
})

module.exports = actionRouter;