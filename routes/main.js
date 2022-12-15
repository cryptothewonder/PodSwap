const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const upload = require("../middleware/multer");
// const messageController = require('../controllers/messageClient');
// const getInbox = require("../controllers/messageClient");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup",  upload.single('file'), authController.postSignup);
router.get('/comedy', ensureAuth, postsController.getComedy)
router.get('/truecrime', ensureAuth, postsController.getTrueCrime)
router.get('/science', ensureAuth, postsController.getScience)
router.get('/other', ensureAuth, postsController.getOther)
// router.get('/inbox', messageController.getInbox)

module.exports = router;
