const express = require("express");
const bodyParse = require("body-parser");
const path = require("path");
const Router = require("./Routes/routes");

const app = express();
const PORT = 3030;
const drtName = path.join(__dirname, "/Views");

app.set("view engine", "ejs");
app.set("Views", drtName);

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use(express.static(drtName));

app.use("/upload", express.static(path.join(__dirname, "/upload")));

app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Your Server Run On http://localhost:${PORT}`);
});
