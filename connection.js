const mongoose = require('mongoose');

async function connectMongo(url){
    await mongoose.connect(url)
    .then(()=>console.log('MongoDB Connected'))
    .catch((err)=>console.log(err));
};

module.exports = {connectMongo};