const express = require("express");
const app = express();
const chalk = require("chalk");
const morgan = require("morgan");

// app.use(morgan("tiny"));
// app.use(morgan("dev"));

// app.use(
//   morgan(
//     ":url :status :method :res[content-length] - :response-time David Yakin Is The lion King!!!"
//   )
// );

app.use(
  morgan((tokens, req, res) => {
    // console.log(tokens);
    if (tokens.method(req, res) === "GET") return "bla bla";

    // return `${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens.status(
    //   req,
    //   res
    // )} ${tokens["response-time"](req, res)} milliseconds`;

    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

["/get", "GET"];

const PORT = 7171;
app.listen(PORT, () =>
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`))
);
