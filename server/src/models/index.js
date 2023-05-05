const { User } = require('./User')
const { Deck } = require('./deck')
const { Card } = require('./card')
const { Attack } = require('./attack')
const { sequelize } = require('../db/config')
// import the rest of your models above
sequelize.sync();
//set up the associations here

// and then export them all below
module.exports = { 
    User,
    Deck,
    Attack,
    Card
 }
