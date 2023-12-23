require("make-promises-safe");
require("express-async-errors");
require("./init");

const express = require("express");
const cors = require("cors");

const middlewares = require("./src/middlewares");

const app = express();
app.use(cors());

app.get("/", middlewares.auth, (req, res) => {
  return res.json("Authorized endpoint");
});

const PORT = process.env.PORT || 8000;
app.set("port", PORT);

app.listen(app.get("port"), () =>
  console.info(`🚀 Listening on port ${PORT} with pid ${process.pid}`)
);
