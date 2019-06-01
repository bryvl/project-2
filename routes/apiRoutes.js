var db = require("../models");
var express = require('express');
var router = express.Router();

module.exports = function(router) {
  // Get all examples
  router.post("/api/events/", function(req, res) {
    db.Event.create({
      userName: req.body.userName,
      eventName: req.body.eventName,
      attendanceLimit: req.body.attendanceLimit,
      attending: 0,
      isDate: req.body.isDate,
      eventDescription: req.body.eventDescription,
      eventLocation: req.body.eventLocation
    }).then(function(result) {
      res.json(result);
      // {id: result.insertId}
      console.log(result);
    });
  });

  //Get request for all events
  router.get("/api/events/", function(req, res) {
    db.Event.findAll()
    .then(function(eventData) {
      res.json(eventData);
    });
  });

  // Get request for specific event page
  router.get("/api/events/:id", function(req, res) {
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(
      function(specificEventData) {
        res.json(specificEventData);
      });
  });
  
   // Checks to see if the user's email already exists in the db, if not then the user is added
  router.post("/api/user", function(req, res) {
    db.User.count({ where: { email: req.body.email }})
      .then(count => {
        if (count != 0) {
          return false;
        }
        db.User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          profilePic: req.body.profilePic,
          description: req.body.description,
          singleReadyMingle: req.body.singleReadyMingle,
          }).then(
          function(userData) {
            res.json(userData);
          });
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
    router.get("/api/pets/", function(req, res) {
      db.Pet.findAll()
      .then(function(petData) {
        res.json(petData);
      });
    });
  
    // POST route for a saving a pet
    router.post("/api/pets", function(req, res) {
      console.log(req.body);
    
      db.Pet.create({
        name: req.body.name,
        age: req.body.age,
        petBreed: req.body.petBreed,
        petSex: req.body.petSex,
        petInfo: req.body.petInfo
        //UserId: 1
      }).then(function(petData) {
        
        res.json(petData);
      });
    });
  
    //DELETE route for deleting a pet
    router.delete("/api/pets/:id", function(req, res) {
      // We just have to specify which pet we want to destroy with "where"
      db.Pet.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbTodo) {
        res.json(petData);
      });
  
    });
  
    // PUT route to update a pet
    router.put("/api/pets/:id", function(req, res) {
  
      db.Pet.update({
        name: req.body.name,
        age: req.body.age,
        petBreed: req.body.petBreed,
        petSex: req.body.petSex,
        petInfo: req.body.petInfo
      }, {
        where: {
          id: req.params.id
        }
      }).then(function(petData) {
        res.json(petData);
      });
    });
};
