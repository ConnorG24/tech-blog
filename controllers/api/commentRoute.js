const {User, Post, Comments} = require('../../models');
const router = require('express').Router();

const withAuth = require('../../utils/auth');

//get all comments

router.get('/', async (req,res) =>{
    try{
        Comments.findAll().then((commentsData) =>{
            res.json(commentsData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})

// get one by id
router.get('/:id', async (req,res) =>{
    try{
        Comments.findOne().then((commentsData) =>{
            res.json(commentsData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})


