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