const express = require("express");
const app = express();
const chalk = require("chalk");

app.use(express.static("./public"));

const PORT = 8181;
app.listen(PORT, () =>
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`))
);
