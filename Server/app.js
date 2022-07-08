const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
// const { MONGOURI } = require("./config/keys");

const customMiddleware = (req, res, next) => {
  console.log("Middleware Executed");
  next();
};

// mongoose.connect(MONGOURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on("connected", () => {
//   console.log("conneted to mongo yeahh");
// });
// mongoose.connection.on("error", (err) => {
//   console.log("err connecting", err);
// });

// require("./models/user");
// require("./models/post");

// app.use(express.json());
// app.use(require("./routes/auth"));
// app.use(require("./routes/post"));
// app.use(require("./routes/user"));

// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});

/* // <<<<<<< Middleware >>>>>>>>

// app.use(customMiddleware);  // for multiple route

app.get("/", (req, res) => {
  console.log("Home");
  res.send("Hello World");
});

app.get("/about", customMiddleware, (req, res) => {
  // for single route use middleware in between bracket. its prebuild middleware
  console.log("About");
  res.send("About page");
});

*/
