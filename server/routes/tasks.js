const express = require('express')

const db = require('../db/tasks')

const router = express.Router()

module.exports = router

// list all tasks
router.get('/', (req, res) => {
  db.listTasks()
    .then((tasks) => {
      res.json(tasks)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// add a task
router.post('/', (req, res) => {
  const newTask = req.body
  db.addTask(newTask)
    .then((newTask) => res.json(newTask))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// update a task
router.patch('/', (req, res) => {
  const update = req.body
  db.updateTask(update)
    .then((updatedTask) => res.json(updatedTask))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// delete a task 
router.delete('/', (req, res) => {
  const id = req.body.id
  db.deleteTask(id)
    .then(() => res.status(204).end())
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})