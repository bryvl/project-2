var Event = require('./eventModel');
var Pet = require('./petModel');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      profilePic: {
          type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      singleReadyMingle: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });
    
    User.associate = function(models) {
      // This first association would be to store all the events a user has created
      User.hasMany(models.Event, {
        onDelete: "cascade"
      });
    
    // This association might be to store all the events a user has attended
    // User.hasMany(AttendedPlayDate OR Participated/Participant);
    
    // Stores User's pets
    User.hasMany(models.Pet, {
      onDelete: "cascade"
    });
  };
  
    return User;
  };
  