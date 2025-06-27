const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set("strictQuery", false);

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

connectDB();
module.exports = mongoose.connection;
