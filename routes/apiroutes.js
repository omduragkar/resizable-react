const express = require('express');
const User = require('../userSchema');
const router = express.Router();

// For Login POST request will make rest API: 
router.post('/join', async (req, res)=>{
    const x = req.body;
    try{
        const user = await User.findOne({email:x.email}); 
        if(user && user.password == x.password)
        {
            res.json(user);
        }
        else{
            res.status(400);
            res.json({ message:"Invalid Email or Password!"})
        }
    }
    catch(err){
        console.log(err);
        res.status(400);
        res.json({err:err, message:"email doesn't exists!"})
    }
})


// For User Register POST Request: 

router.post('/create', async (req, res)=>{
    if(req.body.password == req.body.confirmpassword)
    {

        const userexists = await User.findOne({email:req.body.email});
        if(userexists)
        {
            res.status(400);
            res.json({message:"User Already Exists!"});
        }
        else{
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            if(user)
            {
                res.status(201).json({
                    _id:user._id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                });
            }
            else{
                res.status(400);
                res.json({message:"Error in creating User!"});
            }
            
        }
    }
    else{
        res.status(400);
        res.json({message:"Password and Confirm Password Don't match"});
    }
});


// For Adding Content POST Request: 


router.post("/add", async (req, res)=>{
    // console.log(req.body);
    let content = req.body.content;
    if(content.length == 0 || content[0].name === undefined){
        res.status(400).json({"message":"0 length array"});
    }
    else{


        try{
            const user = await User.findOne({_id:req.body.id});
            user.content=[];
            content.forEach(element => {
                user.content.push(element);
            });
            user.counter.create = user.counter.create + 1;
            user.save();
            console.log(user.content);
            res.status(200).json({data:user});
        }catch(err){
            console.log(err);
            res.status(400).json({
                err,
                message:"Invalid Request!"
            })
        }
    }
    
})


// For Updating Content POST Request: 

router.post("/update", async (req, res)=>{
    let content = req.body.content;
    try{
        
        let user = await User.findOne({_id:req.body.id});
        user.content = content;
        let x = user.counter.update + 1;
        user.counter.update = x;
        await user.save();
        res.status(200).json({
            "data":user
        });
    }catch(err){
        console.log(err);
        res.status(400).json({
            err,
            message:"Invalid Request!"
        })
    }
    
})


// For Counting total create update POST Request: 

router.post("/count", async (req, res)=>{
    try{
        const user = await User.findOne({_id:req.body.id});
        res.status(200).json({
            "message":"success",
            "count":user.counter
        });
    }catch(err){
        console.log(err);
        res.status(400).json({
            err,
            message:"Invalid Request!"
        })
    }

})
module.exports = router




