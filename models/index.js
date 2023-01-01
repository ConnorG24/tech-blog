const User = require('./User');
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

Post.hasMany(Comments,{
    foreignKey: 'post_id',
    onDelete:'cascade'
});

Comments.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'cascade'
});

Comments.hasMany(Post,{
    foreignKey: 'post_id',
    onDelete:'cascade'
});

module.exports = {User, Comments, Post}