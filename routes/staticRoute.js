const express = require('express');
const staticrouter = express.Router();

staticrouter.route('/').get((req,res)=>{
    res.render('home');
});

module.exports = {staticrouter}