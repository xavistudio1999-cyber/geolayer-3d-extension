const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 4173;

app.use(express.static(path.join(__dirname)));

app.get("/health", (_, res) => {
  res.json({ ok: true, service: "geolayer-3d" });
});

app.listen(port, () => {
  console.log(`GeoLayer 3D preview running at http://localhost:${port}`);
});
