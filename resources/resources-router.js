const express = require('express');

const resources = require('./resources-model');

const router = express.Router();

// GET
router.get('/',(req,res) =>{
    resources.getResources()
    .then(resource =>{
        res.json(resource)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to retreive the Resources'
        });
    });
});

// POST
router.post('/', (req,res) => {
    const resourceData = req.body
    resources.addResources(resourceData)
    .then(resource =>{
        res.status(201).json(resource)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({
            message: 'Failed to create resource'
        });
    });
});

module.exports = router;