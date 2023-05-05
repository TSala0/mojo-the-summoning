// create your User model here
const { sequelize, Sequelize } = require("../db/config");

const Attack = sequelize.define("Attack", {
    id: Sequelize.INTEGER,
    title: Sequelize.STRING,
    mojoCost: Sequelize.INTEGER,
    staminaCost: Sequelize.INTEGER,
  })

  module.exports = {
    Attack
  }