const express = require('express');
const taskRouter = express.Router();
const {createTask,getAllTasks,updateTask,deleteTask} = require('../controllers/task');

taskRouter.route('/').post(createTask).get(getAllTasks);
taskRouter.route('/:id').patch(updateTask).delete(deleteTask);

module.exports = {taskRouter};