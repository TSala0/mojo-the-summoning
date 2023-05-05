// create your User model here
const { sequelize, Sequelize } = require("../db/config");

const Card = sequelize.define("Card", {
    id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    mojo: Sequelize.INTEGER,
    stamina: Sequelize.INTEGER,
    imgUrl : Sequelize.STRING
  })

  module.exports = {
    Card
  }