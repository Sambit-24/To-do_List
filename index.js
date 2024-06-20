const express = require('express');
const {staticrouter} = require('./routes/staticRoute');
const {taskRouter} = require('./routes/task');
const path = require('path');
const {connectMongo} = require('./connection');

const app = express();
const PORT = 3000;

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.use(express.urlencoded({extended:false}));
app.use('/',staticrouter);
app.use('/tasks',taskRouter);
connectMongo('mongodb://127.0.0.1:27017/tasks');

app.listen(PORT,()=>{
    console.log(`Sever started at Port: ${PORT}`)
})