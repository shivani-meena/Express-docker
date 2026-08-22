const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from my Express Docker app!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});