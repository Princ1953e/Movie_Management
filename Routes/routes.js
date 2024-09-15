const express = require("express");
const controller = require("../Controller/controller");
const routes = express.Router();
const imgsUpload = require("../Config/multer");

routes.get("/", controller.localHost);
routes.post("/movieSubmit", imgsUpload.single("image"), controller.hostSubmit);
routes.get("/editMovie/:id", controller.editMovie);
routes.post(
  "/updateMovie/:id",
  imgsUpload.single("image"),
  controller.movieUpdate
);
routes.get("/deleteUser/:id", controller.deleteMovie);

module.exports = routes;
