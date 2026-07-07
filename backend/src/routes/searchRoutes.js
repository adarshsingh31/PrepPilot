const express = require("express");
const router = express.Router();
const { globalSearch } = require("../controllers/searchController");
const protect = require("../middleware/authMiddleware");

// Protected global search route
router.get("/", protect, globalSearch);

module.exports = router;
