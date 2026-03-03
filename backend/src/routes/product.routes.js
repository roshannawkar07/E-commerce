const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const { protect, authorizeRoles } = require("../middleware/auth.middleware");
// 🔓 Public Routes
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

// 🔐 Admin Routes
router.post("/", protect, authorizeRoles("admin"), createProduct);
router.put("/:id", protect, authorizeRoles("admin"), updateProduct);
router.delete("/:id", protect, authorizeRoles("admin"), deleteProduct);

module.exports = router;
