var User = require('./userModel');

module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
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
    });
    
    Event.associate = function(models) {

    // This first association would be to set up the UserID foreign key in the Event table
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

    // This second association might be to store all the Participants an Event has
    // Event.hasMany(Participant);
    // We could try to push participants to a sub-table or we could try to somehow pass Event an array which from 
    // what I've read is not possible explicitly. Need round about way to do that.


    return Event;
  };
  