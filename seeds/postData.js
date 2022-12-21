const { Post } = require('../models'); 

const postData = [
    {
        title:'VR',
        content: 'VR is expensive',
        user_id:1
    },{
        title:'Troubleshoot',
        content: 'How do I fix windows search not working?',
        user_id:2
    },{
        title:'os upgrade',
        content: 'Is possible to upgrade windows 95 to ll?',
        user_id:3
    },{
        title:'hello',
        content: 'I dont know how to computer',
        user_id:4
    }
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;