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
    eventLocation: {
      type: DataTypes.STRING
    },
    attendanceLimit: {
      type: DataTypes.INTEGER
    },
    attending: {
      type: DataTypes.INTEGER
    },
    eventDate: {
      type: DataTypes.DATE
    },
    userPet: {
      type: DataTypes.STRING
    },
    eventDescription: {
      type: DataTypes.TEXT
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  },{
    freezeTableName: true
  });
  
  Event.associate = function(models) {
    
    Event.hasMany(models.UserEvent, {
      onDelete: "cascade"
    });
    Event.belongsTo(models.User);
  };
  return Event;
};
  