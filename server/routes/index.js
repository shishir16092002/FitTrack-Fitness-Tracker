const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

router.use("/", apiRoutes);

module.exports = router;
