const router = require("express").Router();
const dessertRoutes = require("./desserts");

// Desserts routes
router.use("/desserts", dessertRoutes);

module.exports = router;
