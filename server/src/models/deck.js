// create your User model here
const { sequelize, Sequelize } = require("../db/config");

const Deck = sequelize.define("Deck", {
    id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    xp: Sequelize.INTEGER
  })

  module.exports = {
    Deck
  }