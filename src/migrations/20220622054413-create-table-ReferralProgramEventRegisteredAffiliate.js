'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('ReferralProgramEventRegisteredAffiliates', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      blockNumber: {
        type: Sequelize.DataTypes.INTEGER
      },
      transactionHash: {
        type: Sequelize.DataTypes.STRING
      },
      referral: {
        type: Sequelize.DataTypes.STRING
      },
      affiliate: {
        type: Sequelize.DataTypes.STRING
      },
      timestamp: {
        type: Sequelize.DataTypes.STRING
      },
      network: {
        type: Sequelize.DataTypes.STRING
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('ReferralProgramEventRegisteredAffiliates');
  }
};