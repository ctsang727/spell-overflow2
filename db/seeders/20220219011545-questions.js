'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Questions';
    return queryInterface.bulkInsert(options, [

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   options.tableName = 'Questions';
   return queryInterface.bulkDelete(options);
  }
};
