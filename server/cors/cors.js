const express = require("express");
const app = express();
const cors = require("cors");

// const controller = (req, res, next) => {
//   console.log("in cors controller");
//   const isDenied = req.denied;
//   if (isDenied) return res.status(403).send("stop!!!");
//   next();
// };

const authorized_sources = ["http://127.0.0.1:3000", "http://127.0.0.1:5500"];

const corsOptions = {
  origin: authorized_sources,
  code: 200,
};

// app.use(cors(corsOptions), controller);
app.use(cors(corsOptions));

module.exports = app;
