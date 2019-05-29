'use strict';

   module.exports = {

    up: async (queryInterface) => {
      await queryInterface.bulkInsert('User', [
        {name: 'Bryan Valencia', email: 'bryan.val93@gmail.com', description: 'Wild and craaazy guy', singleReadyMingle: true, id: 1},
        {name: 'Ryan Valencia', email: 'ryan.val93@gmail.com', description: 'liBDHVABCKJDS', singleReadyMingle: false, id: 2}
      ], {});
  
      const user = await queryInterface.sequelize.query(
        `SELECT id from USER;`
      );
  
      const userRows = user[0];
  
      return await queryInterface.bulkInsert('Event', [
        {eventName: 'Fun at the Park', isDate: false, location: 'Humboldt Park', attendanceLimit: 10, dateTime: 'May 25th @ 12:30pm', userPet: 'Vinci', description: 'Come have fun at the park!', id: '1', user_id: userRows[0].id},
        {eventName: 'Date at the Park ;)', isDate: true, location: 'Umstead Park', attendanceLimit: 1, dateTime: 'May 26th @ 12:30pm', userPet: 'Luna', description: 'Come have date at the park!', id: '2', user_id: userRows[0].id},,
        
      ], {});
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('User', null, {});
      await queryInterface.bulkDelete('Event', null, {});
    }
  //    up: (queryInterface, Sequelize) => {
  //     return queryInterface.bulkInsert('Events', [{
  //       eventName: 'Fun at the Park',
  //       isDate: false,
  //       location: 'Humboldt Park',
  //       attendanceLimit: 10,
  //       dateTime: 'May 25th @ 12:30PM',
  //       userPet: 'Luna',
  //       description: "Come hang out with me and Luna at Humboldt Park! "
  //     }], {});
  // },
  // down: (queryInterface, Sequelize) => {
  //   return queryInterface.bulkDelete('Events', null, {});
  // }
}
