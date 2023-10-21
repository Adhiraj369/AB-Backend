const app = require("./app");
const express = require("express");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const env = require("dotenv");
const path = require("path");


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "production") {
  env.config({ path: "backend/config/config.env" });
}
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);


// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => res.send("server is working"))

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Serve static files from the development directory
// app.use(express.static(path.join(__dirname, 'frontend')));

// Handle other routes or API endpoints here

// For any other route, serve the index.html file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
// });

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
