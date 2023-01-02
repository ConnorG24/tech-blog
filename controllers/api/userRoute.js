const {User, Post, Comments} = require('../../models');
const router = require('express').Router();


//get all users

router.get('/', async (req,res) =>{
    try{
        User.findAll().then((userData) =>{
            res.json(userData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})

// get one by id
router.get('/:id', async (req,res) =>{
    try{
        User.findOne().then((userData) =>{
            res.json(userData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})

// create a user

router.post('/', async (req,res) =>{
    try{
        User.create({
            name: req.body.name,
            password: req.body.password
        }).then((userData) =>{
            res.json(userData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})

// login route

router.post('/login', async (req,res) =>{
    try{
        User.findOne({
            where:{
                name: req.body.name
            }
        }).then((userData) =>{
            if(!userData){
                res.status(400).json({message:'User with that name does not exist'})
                return;
            }
            const passwordMatch = userData.checkPassword(req.body.password);
            if(!passwordMatch){
                res.status(400).json({message: 'wrong password kupo!'})
                return;
            }
            res.json({user: userData, message:'logged in succsesfully'})
        })
    }catch(err){
        res.status(500).json(err);
    }
})