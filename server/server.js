const express = require('express')
const path = require('path')

const tasks = require('./routes/tasks')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1/todos', tasks)

module.exports = server