const {Task} = require('../models/taskSchema');
const mongoose = require('mongoose');

async function createTask(req,res){
    const body = req.body;
    const title = body.title;
    const desc = body.description;
    const tasks = {
        title: title,
        description:desc
    }
    await Task.create(tasks);
    return res.render('home');
}

async function getAllTasks(req,res){
    const tasks = await Task.find({});
    // res.send(tasks);
    return res.render('tasks',{tasks:tasks});
}

async function updateTask(req,res){
    const update = req.body;
    const id = req.params.id;
    await Task.findByIdAndUpdate(id,{$set: update},{new:true});
    const tasks = await Task.find({});
    return res.render('tasks',{tasks:tasks});
}

async function deleteTask(req,res){
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    const tasks = await Task.find({});
    return res.render('tasks',{tasks:tasks});
    // return res.send('deleted');
}

module.exports = {createTask,getAllTasks,updateTask,deleteTask}