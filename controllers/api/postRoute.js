const {User, Post, Comments} = require('../../models');
const router = require('express').Router();

const withAuth = require('../../utils/auth');


router.get('/', async (req,res) =>{
    try{
        Post.findAll().then((postData) =>{
            res.json(postData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/:id', async (req,res) =>{
    try{
        Post.findOne().then((postData) =>{
            res.json(postData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})