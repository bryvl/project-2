'use strict';

   module.exports = {
     up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Event', [{
        eventName: 'Fun at the Park',
        isDate: false,
        location: 'Humboldt Park',
        attendanceLimit: 10,
        dateTime: 'May 25th @ 12:30PM',
        userPet: 'Luna',
        description: "Come hang out with me and Luna at Humboldt Park! "
      }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Event', null, {});
  }
}
  
  /*
      eventName: {
        type: DataTypes.STRING
      },
      isDate: {
        type: DataTypes.BOOLEAN
      },
      location: {
        type: DataTypes.STRING
      },
      attendanceLimit: {
        type: DataTypes.INTEGER
      },
      dateTime: {
          type: DataTypes.STRING
      },
      userPet: {
        type: DataTypes.String
      },
      description: {
        type: DataTypes.TEXT
      }
  */
