var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll().then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/examples/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(
      function(dbExamples) {
        res.json(dbExamples);
      }
    );
  });

  // Create a new example
  app.post("/api/eventpage", function(req, res) {
    db.Event.create(req.body).then(
      function(eventData) {
        res.json(eventData);
      }
    );
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(
      function(dbExample) {
        res.json(dbExample);
      }
    );
  });
};
