const express = require("express");
const app = express();
const chalk = require("chalk");
const router = express.Router();

router.get("/message", (req, res) => {
  console.log("in router get!");
  res.send({ message: "in router get!!!" });
});

router.post("/test", (req, res) => {
  console.log("in post");
  res.send("in post!!");
});

app.use("/cards", router);

const PORT = 8181;
app.listen(PORT, () =>
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`))
);
