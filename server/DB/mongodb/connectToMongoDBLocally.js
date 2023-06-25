const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb://127.0.0.1:27017/BCard_david_yakin")
  .then(() =>
    console.log(
      chalk.magentaBright(
        "You have been connected to MongoDB Locally successfully!"
      )
    )
  )
  .catch(error =>
    console.log(
      chalk.redBright(`Could not connect to mongoDb locally: ${error}`)
    )
  );

/*** mongodb structure ***/
// const mongoDb = {
//   david_database: {
//     bcard_david_yakin: {
//       card: [{}],
//       users: [{}],
//     },
//     memories: {},
//     test: {},
//   },
//   moshe_database: {},
//   shola_database: {},
// };
