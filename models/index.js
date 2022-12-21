const User = require('./User');
const Comment = require('./Comments');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Post,{
    foreignKey: 'user_id'
});

User.hasMany(Comments,{
    foreignKey: 'user_id',
    onDelete:'cascade'
});

Post.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'cascade'
});

Post.hasMany(Comment,{
    foreignKey: 'post_id',
    onDelete:'cascade'
});

Comment.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'cascade'
});

Comment.hasMany(Post,{
    foreignKey: 'post_id',
    onDelete:'cascade'
});