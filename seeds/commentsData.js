const { Comments } = require('../models'); 

const commentsData = [
    {
       comment_text: 'VR is not affordable at the moment',
       user_id:1,
       post_id:1
    },{
       comment_text: 'google?',
       user_id:2,
       post_id:2
    },{
        comment_text: 'not sure',
       user_id:3,
       post_id:3
    },{
        comment_text: 'hi',
       user_id:4,
       post_id:4
    }
]
const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;