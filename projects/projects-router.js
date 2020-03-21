const express = require('express');

const project = require('./projects-model');

const router = express.Router();


// GET
router.get('/',(req,res) =>{
    project.getProjects()
    .then(proj =>{
        res.json(proj)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to retreive the Projects'
        });
    });
});

// POST
router.post('/', (req,res) => {
    const projectData = req.body
    project.addProjects(projectData)
    .then(proj =>{
        res.status(201).json(proj)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({
            message: 'Failed to create project'
        });
    });
});

module.exports = router;