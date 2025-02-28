// const express = require('express')

// const router = express.Router()

// const { protect } = require('../middleware/auth')

// const { createPost } = require('../controllers/postController')

// router.post('/', protect, createPost)

// module.exports = router

// const express = require('express');
// const router = express.Router();
// const { protect } = require('../middleware/auth');
// const { createPost } = require('../controllers/postController');

// // Define routes
// router.post('/', protect, createPost);

// // Export the router directly
// module.exports = router; // ✅ Correct export

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { createPost } = require("../controllers/postController");

console.log("createPost:", createPost);

router.post("/", protect, createPost);
module.exports = router;