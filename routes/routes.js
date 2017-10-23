var express = require("express");
var path = require("path");

var apiRoutes = require("./api-routes");

var router = new express.Router();

router.use("/", apiRoutes);

module.exports = router;
