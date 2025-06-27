const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS Setup
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*',  
  credentials: true,
}));

// API Routes
app.use("/api", routes);

// DB and Server Start
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`✅ MongoDB connected successfully!`);
    console.log(`API server running on port ${PORT}!`);
  });
});
