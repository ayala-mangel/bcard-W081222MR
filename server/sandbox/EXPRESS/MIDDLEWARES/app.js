const express = require("express");
const app = express();
const chalk = require("chalk");

// app.use((req, res, next) => {
//   console.log(chalk.yellowBright("in first app.use!"));
//   res.send("in app.use!!!");
// });

// app.use("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in second app.use!"));
//   res.send({ message: "i ended the req res cycle!!!!" });
// });

/****** app.use next *****/
// app.use(
//   "/",
//   (req, res, next) => {
//     console.log(chalk.yellowBright("one"));
//     next();
//   },
//   (req, res, next) => {
//     console.log(chalk.redBright("two"));
//     next();
//   },
//   (req, res) => {
//     console.log(chalk.magentaBright("three"));
//     res.send("end of cycle!");
//   }
// );

/***** express app middleware exe *****/

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("first CB");
//     req.user = { first: "jon", last: "dho" };
//     next();
//   },
//   (req, res) => {
//     console.log("second CB");
//     res.send(req.user);
//   }
// );

/****** middleware method beside app.use *****/
// app.get("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in get method!!!"));
//   res.send("in get!");
// });

// לעולם לא יגיע לכאן כי הוא כבר מיורת במטודה למעלה ויש החזרה של תשובה
// app.get("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in get second method!!!"));
//   res.send("in get second!");
// });

// app.post("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in post method!!!"));
//   res.send("in post");
// });

// app.put("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in put method!!!"));
//   res.send("in put");
// });

// app.patch("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in patch method!!!"));
//   res.send("in patch");
// });

// app.delete("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in delete method!!!"));
//   res.send("in delete");
// });

/***** response *****/
/***** res.send *****/
app.use("/", (req, res) => {
  res.send("testing!!!!");
  // res.send({ key: "value" });
  //   res.send(["one", "two", "three"]);
  //   res.send(false); // ממיר למרוזת תווים
  //   res.send(503); // הוא חושב שאני מנסה לשלוח סטאטוס קוד
  //   res.send(null);
});

/***** res.status *****/
// app.use((req, res) => {
//   console.log("in req status!");
//   res.status(401).send("end cycle!");
// });

const PORT = 9191;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on :http://localhost:${PORT}`));
});
