const express = require("express");
const router = express.Router();

const controller = require("../controllers/controllers.office");

router.get("/", controller.findAll);
router.get("/:id", controller.findUser);
router.post("/", controller.addUser);
router.delete("/:id", controller.deleteUser);
router.patch("/:id", controller.updateUser);
router.put("/:id", controller.updateWholeUser);

module.exports = router;
