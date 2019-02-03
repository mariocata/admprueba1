const Sequelize = require('sequelize');
const datab = require('../config/database');

const clients = datab.define("clients", {
    idclient: {
        type: Sequelize.STRING,
        
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    Nombre: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Correo: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      Telefono: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Nacionalidad: {
        type: Sequelize.STRING,
        allowNull: false
      }
  });

  module.exports = clients;