const express = require("express");
const path = require("path");
const indexRouter = require("./app/routes/index");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);


app.listen(port, () => {
  console.log(`Server Listening on Port: ${port}`);
});
