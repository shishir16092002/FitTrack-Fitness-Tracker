const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./config/connection");
const cors = require('cors');
require("dotenv").config(); 

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*',
  credentials: true,
}));

app.use("/api", routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
