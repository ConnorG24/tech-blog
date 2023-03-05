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

// create a post

router.post('/',withAuth,async (req,res) =>{
    try{
        
        Post.create({
            title: req.body.title,
            content: req.body.title,
            user_id: req.body.user_id
        }).then((postData) =>{
            res.json(postData)
        })
    
    }catch(err){
        res.status(500).json(err);
    }
})
// update/ change post

router.put('/:id', async (req,res) =>{
    try{
        Post.update({
            title: req.body.title,
            content: req.body.content
        },{
            where:{
                id: req.params.id
            }
        }).then((postData) =>{
            if(!postData){
                res.status(404).json({message: 'post not found kupo'})
            }
            res.json(postData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})

//delete post

router.delete('/:id', async (req,res) =>{
    try{
        Post.destroy({
            where:{
                id: req.params.id 
            }
        }).then((postData) =>{
            if(!postData){
                res.status(404).json({message: 'post not found kupo'})
            }
            res.json(postData)
        })
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;