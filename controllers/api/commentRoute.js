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


// create a comment

router.post('/',withAuth,async (req,res) =>{
    try{
        if(req.session){
        Comments.create({
            comment_text: req.body.comment_text,
            user_id: req.body.user_id,
            post_id: req.body.post_id
        }).then((commentsData) =>{
            res.json(commentsData)
        })
    }
    }catch(err){
        res.status(500).json(err);
    }
})
// update/ change comment

router.put('/:id', async (req,res) =>{
    try{
        Comments.update({
            comment_text: req.body.comment_text
        },{
            where:{
                id: req.params.id
            }
        }).then((commentsData) =>{
            if(!commentsData){
                res.status(404).json({message: 'comment not found kupo'})
            }
            res.json(commentsData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})

//delete comments

router.delete('/:id', async (req,res) =>{
    try{
        Comments.destroy({
            where:{
                id: req.params.id 
            }
        }).then((commentsData) =>{
            if(!commentsData){
                res.status(404).json({message: 'comment not found kupo'})
            }
            res.json(commentsData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})