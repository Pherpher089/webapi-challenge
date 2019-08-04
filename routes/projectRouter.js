const express = require('express');
const projectRouter = express.Router();
const projectModel = require('../data/helpers/projectModel');


projectRouter.get('/', async (req, res) => {
    try {
        const projects = await projectModel.get();
        res.status(200).json(projects)
    } catch ({message}) {
        res.status(500).json(message)
    }
})

projectRouter.get('/:id', async (req, res) => {
    try {
        const project = await projectModel.get(req.params.id);
        res.status(200).json(project)
    } catch ({message}) {
        res.status(500).json(message)
    }
})

projectRouter.get('/:id/actions', async (req, res) => {
    try {
        const projectActions = await projectModel.getProjectActions(req.params.id);
        res.status(200).json(projectActions)
    } catch ({message}) {
        res.status(500).json(message)
    }
})



projectRouter.post('/', async (req, res) => {
    const {name, description} = req.body;

    if(!name || !description){ 
        res.status(422).json({errorMessage: 'Please provide a name and description for the project you are trying to add.'})
    }

    try {
        const projectAdded = await projectModel.insert(req.body);
        res.status(201).json(projectAdded);
        
    } catch ({message}) {
        res.status(500).json(message);
    }
})

projectRouter.put('/:id', async (req, res) => {
    
    const {name, description} = req.body;

    if(!name || !description){ 
        res.status(422).json({errorMessage: 'Please provide a name and description for the project you are trying to change.'})
    }    
    try {
        const projectChanged = await projectModel.insert(req.params.id, req.body);
        res.status(201).json(projectChanged);
    } catch ({message}) {
        res.status(500).json(message)
    }
})

projectRouter.delete('/:id', async (req, res) => {

    try {
        const projectRemoved = await projectModel.remove(req.params.id);
        res.status(201).json(projectRemoved);
    } catch ({message}) {
        res.status(500).json(message)
    }
})

module.exports = projectRouter;