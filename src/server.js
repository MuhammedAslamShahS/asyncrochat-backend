import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// parse json
app.use(express.json());

// ✅ allow ONLY your frontend
app.use(
  cors({
    origin: "https://asyncrochat-frontend.vercel.app",
    credentials: true,
  })
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


// not found
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});


app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
