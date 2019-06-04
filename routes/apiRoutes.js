var db = require('../models');
var express = require('express');
var router = express.Router();

module.exports = function(router) {
	// Post to Event table and then create an instance of a UserEvent model based on this event's id and user's id and hopefully pet's id next
	router.post('/api/events/', function(req, res) {
		db.Event
		.create({
			UserId: req.body.UserId,
			userEmail: req.body.userEmail,
			eventName: req.body.eventName,
			attendanceLimit: req.body.attendanceLimit,
			attending: 0,
			isDate: req.body.isDate,
			eventDescription: req.body.eventDescription,
			eventLocation: req.body.eventLocation,
			eventDate: req.body. eventDate 
		})
		.then(function(result) {
			res.json(result);
			console.log(result);
			db.UserEvent
			.create({
				EventId: result.id,
				UserId: result.UserId
			})
		});
		
	});

	//Get request for all events
	router.get('/api/events/', function(req, res) {
		db.Event.findAll().then(function(eventData) {
			res.json(eventData);
		});
	});

	// Get request for specific event page
	router.get('/api/events/:id', function(req, res) {
		db.Event
		.findOne({
			where: {
				id: req.params.id
			}
		})
		.then(function(response) {
			res.json(response);
		});
	});

	// On Login, checks to see if the user's email already exists in the db, if not then the user is added
	router.post('/api/user', function(req, res) {
		db.User
			.findOrCreate({
				where: { email: req.body.email },
				defaults: { name: req.body.name, profilePic: req.body.profilePic }
			})
			.then(([ user, created ]) => {
				console.log(
					user.get({
						plain: true
					})
				);
				console.log(created);
				res.json(user);
			});
	});

	// Find user by id
	router.get("/api/user/:id", function(req, res) {
		db.User.findAll({
		  where: {
			id: req.params.UserId
		  }
		})
		.then(function(response) {
			res.json(response);
		});
	});
	// Find user by email
	router.get("/api/user/email/:email", function(req, res) {
		db.User.findAll({
		  where: {
			email: req.params.email
		  }
		})
		.then(function(response) {
		res.json(response);
		});
	});

	//Get request for all users
	router.get('/api/users/', function(req, res) {
		db.User.findAll().then(function(userData) {
			res.json(userData);
		});
	});

	//Put request to update user info
	router.put('/api/user/:email', function(req, res) {
		db.User.update(
				{
					profilePic: req.body.profilePic,
					description: req.body.description,
					singleReadyMingle: req.body.singleReadyMingle,
				},
				{
					where: {
						email: req.params.email
					}
				}
			)
			.then(function(response) {
				res.json(response);
			});
	});

	// router.get("/api/examples/:id", function(req, res) {
	//   db.Example.findOne({
	//     where: {
	//       id: req.params.id
	//     }
	//   }).then(
	//     function(dbExamples) {
	//       res.json(dbExamples);
	//     }
	//   );
	// });

	// // Delete an example by id
	// router.delete("/api/examples/:id", function(req, res) {
	//   db.Example.destroy({ where: { id: req.params.id } }).then(
	//     function(dbExample) {
	//       res.json(dbExample);
	//     }
	//   );
	// });

	//GET, POST, DELETE AND UPDATE on Pet Data

	// GET route for getting all the pets
	router.get('/api/pets/', function(req, res) {
		db.Pet.findAll().then(function(petData) {
			res.json(petData);
		});
	});

	// POST route for a saving a pet
	router.post('/api/pets', function(req, res) {
		console.log(req.body);

		db.Pet
			.create({
				UserId: req.body.UserId,
				petName: req.body.petName,
				petAge: req.body.petAge,
				petBreed: req.body.petBreed,
				petSex: req.body.petSex,
				petInfo: req.body.petInfo
			})
			.then(function(petData) {
				res.json(petData);
			});
	});

	//DELETE route for deleting a pet
	router.delete('/api/pets/:id', function(req, res) {
		// We just have to specify which pet we want to destroy with "where"
		db.Pet
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(function(dbTodo) {
				res.json(petData);
			});
	});

	// PUT route to update a pet
	router.put('/api/pets/:id', function(req, res) {
		db.Pet
			.update(
				{
					name: req.body.name,
					age: req.body.age,
					petBreed: req.body.petBreed,
					petSex: req.body.petSex,
					petInfo: req.body.petInfo
				},
				{
					where: {
						id: req.params.id
					}
				}
			)
			.then(function(petData) {
				res.json(petData);
			});
	});
};
