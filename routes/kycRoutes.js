// const express = require('express')

// const router = express.Router()

// const { protect } = require('../middleware/auth')

// const { createKYC } = require('../controllers/kycController')

// router.post('/', protect, createKYC)

// module.exports = router

// const express = require('express');
// const router = express.Router();
// const { protect } = require('../middleware/auth');
// const { createKYC } = require('../controllers/kycController');

// router.post('/', protect, createKYC);

// module.exports = router

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth"); // ✅ Correct named import
const { createKYC } = require("../controllers/kycController");

router.post("/", protect, createKYC);

module.exports = router;

