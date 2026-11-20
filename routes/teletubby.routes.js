const express = require("express");
const router = express.Router();
const teletubbyController = require("../controllers/teletubby.controller");

router.post('/', teletubbyController.createTeletubby);
router.get('/', teletubbyController.getAllTeletubbies);
router.get('/:id', teletubbyController.getTeletubbyById);
router.put('/:id', teletubbyController.updateTeletubbyById);
router.delete('/:id', teletubbyController.deleteTeletubbyById);

module.exports = router;