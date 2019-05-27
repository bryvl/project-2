var Event = require('./eventModel');
var User = require('./userModel');

module.exports = function(sequelize, DataTypes) {
    var UserEvent = sequelize.define("UserEvent", {});
    
    UserEvent.associate = function(models) {
  
    UserEvent.belongsTo(models.User);

    UserEvent.belongsTo(models.Event);
  };
  
    return UserEvent;
  };
  