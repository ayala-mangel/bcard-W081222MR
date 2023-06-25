const express = require("express");
const app = express();
const chalk = require("chalk");
const router = require("./router/router");
const cors = require("./cors/cors");
const morganLogger = require("./loggers/morganLogger");
const connectToDB = require("./DB/dbService");

app.use(morganLogger);
// app.use(cors);
app.use(express.json());
app.use(router);
app.use(express.static("./public"));

const PORT = 8181;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
  connectToDB();
});
