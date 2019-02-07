const router = require("express").Router();
const dessertRoutes = require("./desserts");

// Article routes
router.use("/desserts", dessertRoutes);

module.exports = router;
