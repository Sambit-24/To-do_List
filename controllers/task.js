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
    return res.json({msg:"task created"});
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
    return res.json({msg:'updated'});
}

async function deleteTask(req,res){
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    return res.json({msg:'deleted'});
}

module.exports = {createTask,getAllTasks,updateTask,deleteTask}