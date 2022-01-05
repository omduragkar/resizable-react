// Connecting to express:

const express = require('express');
// Connecting to mongoDB with mongoose:
const app = express();

const mongoose  = require('mongoose');
// config:

const config = require('dotenv').config();

//Since frontend won't be connected as per cors policy:

const cors = require('cors');
// Thought to use mvc arch. but simnce the routes are in less number i didn't thought to do it

(async function (){
    try{
        const conn = await mongoose.connect(process.env.mongoDB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });      
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    }catch(err){
        console.log(err);
    }
})();



app.use(cors());
const User = require("./userSchema");

app.use(express.json());

// Connecting to routes:

const router = require("./routes/apiroutes");

app.use("/api", router);

// Listening to port:

const port = process.env.PORT || 5000;
const path = require('path');

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}
app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(`Server Started at ${port}`);
    }
})
