var User = require('./userModel');

module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      name: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      },
      petBreed: {
        type: DataTypes.STRING
    },
      petPic: {
          type: DataTypes.STRING
      },
      petInfo: {
        type: DataTypes.TEXT
      }
    });
    
    // This first association would be to store all the Pets a user owns
    Pet.belongsTo(User);

    // This second association might be to store all the events a pet has attended
    // Pet.hasMany(AttendedPlayDate);

    return Pet;
  };