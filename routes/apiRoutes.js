var db = require("../models");
var express = require('express');
var router = express.Router();

module.exports = function(router) {
  // Get all examples
  router.post("/api/events/", function(req, res) {
    db.Event.create({
      eventName: req.body.eventName,
      attendanceLimit: req.body.attendanceLimit,
      attending: 0,
      isDate: req.body.isDate,
      eventDescription: req.body.eventDescription
    }).then(function(result) {
      res.json({id: result.insertId});
      console.log(result);
    });
  });
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
  app.post("/api/user", function(req, res) {
    db.User.count({ where: { email: req.body.email }})
      .then(count => {
        if (count != 0) {
          return false;
        }
        db.User.create(req.body).then(
          function(userData) {
            res.json(userData);
          }
        );
      });
  });

  // app.get("/api/examples/:id", function(req, res) {
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
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(
  //     function(dbExample) {
  //       res.json(dbExample);
  //     }
  //   );
  // });

};
