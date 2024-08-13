const express = require('express');
const zod = require('zod');
const router = express.Router();
const { User, Account } = require('../db');

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const authMiddleware = require('../middleware');


//Signup route
const signupBody = zod.object({
    username : zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})



router.post('/signup', async(req,res)=>{

    const {success} = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken/ Invalid input"
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })
    if(existingUser){
        res.status(409).json({
            message: `User with this ${existingUser.username} already exists` //req.body.username 
        })
    }
    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    })

    await Account.create({
        userId :user._id,
        balance :1+ Math.floor(Math.random()*10000)
    })
             
    const userId = user._id;

    const token = jwt.sign({userId}, JWT_SECRET)

    res.status(200).json({ 
        message: "Signed up successfully",
        token: token
     });
})

//Signin route
const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post('/signin',async (req,res)=>{

    const {success} = signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Invalid input"
        })
    }
    
    const userExists = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(userExists){
        const token = jwt.sign({
            userId: userExists._id
        }, JWT_SECRET);

        res.status(200).json({
            message: "signed in successfully",
            token: token
        })
        return
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})

//Update put req
const updateBody = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})
router.put('/', authMiddleware, async (req, res)=>{
    const { success }  = updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    const user = await User.findOne(
        {_id: req.userId}
    )
    if(!user){
        return res.json({
            message: "No such user exists"
        })
    }else{
        await user.updateOne(req.body)   

        return res.json({
            message: `updated successfully`
        })
    }
})

//Get req for getting other users for payment
router.get('/bulk', async (req, res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or:[{
            firstName: {
                "$regex": filter
            }
        },{
            lastName:{
                "$regex" : filter
            }
        }]
    })

    res.json({
        user : users.map(user =>({
            username: user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id: user._id
        }))
    })

})
module.exports= router; 

