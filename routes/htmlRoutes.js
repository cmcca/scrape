var db = require("../models");

// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
var path = require("path");
// ROUTING
module.exports = function(app) {
  // HTML GET Requests
  app.get("index", function(req, res) {

    res.render("index", {
      layout: "main"
    });
  });
  
  app.get("*", function(req, res) {

    res.render("index", {
      layout: "main"
    });
  });

};