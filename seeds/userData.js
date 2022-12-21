const { User } = require('../models'); 

const userData = [
    {
        names:"Bill Billington",
        password:"12345"
    },{
        names:"Jackie Jackson",
        password:"asdffdas"
    },{
        names:"Tony Lazuto",
        password:"five"
    },{
        names:"Jamie Jamison",
        password:"seven"
    }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;