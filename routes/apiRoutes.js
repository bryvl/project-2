var db = require("../models");
var express = require('express');
var router = express.Router();

module.exports = function(router) {
  // Get all examples
  router.post("/api/events/", function(req, res) {
    db.Event.create({
      eventName: req.body.eventName,
      eventAttendLimit: req.body.eventAttendLimit,
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

  // // Create a new example
  // app.post("/api/events", function(req, res) {
  //   db.Event.create(req.body).then(
  //     function(eventData) {
  //       res.json(eventData);
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
