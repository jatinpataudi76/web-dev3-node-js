// Express server

const express = require("express");
const app = express();

// Browser me http://localhost:3000/ open karne par ye message aayega.
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server started: http://localhost:3000");
});
