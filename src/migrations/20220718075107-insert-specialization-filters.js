'use strict';

const path = require('path');
const fs = require('fs');

const insertSpecializationFiltersPath = path.join(__dirname, 'migrations-data', 'insertSpecializationFilters.sql');
const insertSpecializationFiltersQuery = fs.readFileSync(insertSpecializationFiltersPath).toString();

module.exports = {
  async up (queryInterface, Sequelize, transaction) {
    return queryInterface.sequelize.query(insertSpecializationFiltersQuery, { transaction });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('DELETE * FROM "SpecializationFilters" WHERE "key" IS NOT NULL');
  }
};
