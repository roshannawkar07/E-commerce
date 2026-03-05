import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Connect DB & Cloudinary
connectDB();
connectCloudinary();

// -----------------------
// ✔ FIXED CORS CONFIG
// -----------------------
app.use(
  cors({
    origin: [
      "http://localhost:5173", // frontend
      "http://localhost:5174", // admin panel
      "https://tredora-back.onrender.com", // backend itself (important)
      "https://your-frontend-url", // add your real frontend URL later
      "https://your-admin-url", // add admin URL later
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    credentials: true,
  }),
);

// Allow preflight (OPTIONS)
app.options("*", cors());

// Middlewares
app.use(express.json());

// API Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start Server
app.listen(port, () => {
  console.log("Server started on PORT : " + port);
});
