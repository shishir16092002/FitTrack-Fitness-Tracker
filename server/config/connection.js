const mongoose = require("mongoose");
<<<<<<< HEAD
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
=======

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);
>>>>>>> b1dbdded32eabbdea7a0431ba7696e40013c3e99

module.exports = mongoose.connection;
