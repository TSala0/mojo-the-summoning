// create your User model here
const { sequelize, Sequelize } = require("../db/config");

const User = sequelize.define("User", {
    id: Sequelize.INTEGER,
    username: Sequelize.STRING,
  })

  module.exports = {
    User
  }