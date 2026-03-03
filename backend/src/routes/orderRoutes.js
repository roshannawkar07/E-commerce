const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/auth.middleware");

router.post("/", protect, createOrder);

module.exports = router;
