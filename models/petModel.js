var User = require('./userModel');

module.exports = function(sequelize, DataTypes) {
	var Pet = sequelize.define('Pet', {
		name: {
			type: DataTypes.STRING
		},
		age: {
			type: DataTypes.INTEGER
		},
		petBreed: {
			type: DataTypes.STRING
		},
		petSex: {
			type: DataTypes.STRING
		},
		petInfo: {
			type: DataTypes.TEXT
		}
	});

	Pet.associate = function(models) {
		// This first association would be to store all the Pets a user owns
		Pet.belongsTo(models.User, {
			// foreignKey: {
			// 	allowNull: false
			// }
			onDelete: "cascade"
		});
	};

	// This second association might be to store all the events a pet has attended
	// Pet.hasMany(AttendedPlayDate);

	return Pet;
};
