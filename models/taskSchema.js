const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
       type:String,
       require:true 
    },
    description:{
        type:String,
        require:true
    }
},{timestamps:true});

const Task = mongoose.model('tasks',taskSchema);

module.exports = {Task};