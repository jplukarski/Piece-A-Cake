const router = require("express").Router();
const dessertsController = require("../../controllers/dessertsController");

// Matches with "/api/desserts"
router.route("/")
    .get(dessertsController.findAll)
    .post(dessertsController.create);

// Matches with "/api/desserts/:id"
router
    .route("/:id")
    .get(dessertsController.findById)
    .put(dessertsController.update)
    .delete(dessertsController.remove);

module.exports = router;
