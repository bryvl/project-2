
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
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
      User.hasMany(models.UserEvent, {
        onDelete: "cascade"
      });

  };
  
    return User;
  };
  