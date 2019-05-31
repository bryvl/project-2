var User = require('./userModel');
var UserEvent = require('./userEventModel');

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
    attending: {
      type: DataTypes.INTEGER
    },
    // dateTime: {
    //   type: DataTypes.STRING
    // },
    userPet: {
      type: DataTypes.STRING
    },
    eventDescription: {
      type: DataTypes.TEXT
    }
  },{
    freezeTableName: true
  });
  
  Event.associate = function(models) {
    
    Event.hasMany(models.UserEvent, {
      onDelete: "cascade"
    });
  };
  return Event;
};
  