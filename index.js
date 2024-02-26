const express = require('express');
const mongoose = require('mongoose')
const mongoDB = require('mongodb')

const User = require('./models/user.model')
const app = express()

// Middleware
app.use(express.json())

// MongoDB connection
mongoose.connect('mongodb+srv://kpatel114:pUI2UZFuji0TC2Jq@clusterswilby.kfe6ts9.mongodb.net/?retryWrites=true&w=majority&appName=clusterSwilby')
.then(() => {
    console.log('connected to db cluster')
}).catch(() => {
    console.log('Connected failed')
});
// Connected to MongoDB Database cluster

// Start web Server
app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})
// API Endpoints and Routes
// Home Page
app.get('/', (req,res) => {
    res.send("hello from node API Server")
});
// Users
app.post('/api/users', async (req, res) => {
    try{
       const user =  await User.create(req.body);
       res.status(200).json(user)
    } catch(error){
        res.status(500).json({message: error.message});

    }
    console.log(req.body);
    res.send(req.body);
} )

// 
app.get('/api/users', async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})