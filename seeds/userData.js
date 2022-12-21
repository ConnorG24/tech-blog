const { User } = require('../models'); 

const userData = [
    {
        name:"Bill Billington",
        password:"12345"
    },{
        name:"Jackie Jackson",
        password:"asdffdas"
    },{
        name:"Tony Lazuto",
        password:"five"
    },{
        name:"Jamie Jamison",
        password:"seven"
    }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;