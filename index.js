require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from Docker + CI/CD 🚀</h1>
    <p>This application is running inside a Docker container.</p>
    <p>Deployed automatically through GitHub Actions and Render.</p>

   <h3>${process.env.APP_MESSAGE || "Hello from Node.js! 🚀 CD is working!"}</h3>`);});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});