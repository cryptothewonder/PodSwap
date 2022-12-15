const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messagingCont/inbox");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/inbox", ensureAuth, messageController.getInbox);

module.exports = router;