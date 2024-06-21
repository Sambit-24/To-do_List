const express = require('express');
const taskRouter = express.Router();
const {createTask,getAllTasks,updateTask,deleteTask} = require('../controllers/task');

taskRouter.route('/').post(createTask).get(getAllTasks);
taskRouter.route('/:id/edit').post(updateTask);
taskRouter.route('/:id/delete').post(deleteTask);

module.exports = {taskRouter};