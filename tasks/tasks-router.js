const express = require('express');
const db = require ('../data/db-config');
const tasks = require('./tasks-model');

const router = express.Router();

// GET
router.get('/',(req,res) =>{
    // Join Statement
    
    db('tasks')
    .leftJoin('projects', 'projects.id', 'tasks.project_id')
    .select('tasks.id','tasks.task_description', 'tasks.notes', 'tasks.completed','tasks.project_id','projects.project_name', 'projects.project_description')
    .then(task =>{
        res.json(task)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to retreive the Tasks'
        });
    });
});

// POST
router.post('/', (req,res) => {
    const taskData = req.body
    tasks.addTasks(taskData)
    .then(task =>{
        res.status(201).json(task)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({
            message: 'Failed to create task'
        });
    });
});

module.exports= router;