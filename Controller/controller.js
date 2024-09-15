const mongooesModal = require("../Modal/mongooes");
const fs = require("fs");

const localHost = async (req, res) => {
  const movie = await mongooesModal.find();
  res.render("index", { movie });
};
const hostSubmit = async (req, res) => {
  const obj = new mongooesModal({
    title: req.body.title,
    path: req.file.path,
    date: req.body.releaseDate,
    Produced: req.body.Produced,
    Directed: req.body.Directed,
    genre: req.body.genre,
    rating: req.body.rating,
  });
  console.log("Body Is", obj);

  const movieData = new mongooesModal(obj);
  await movieData.save();
  res.redirect("/");
};

const editMovie = async (req, res) => {
  const { id } = req.params;

  const editData = await mongooesModal.findOne({ _id: id });

  console.log(editData);

  await res.render("edit.ejs", { editData });
};

const movieUpdate = async (req, res) => {
  const { id } = req.params;
  const update = await mongooesModal.findById(id);

  if (req.path) {
    fs.unlink(update.path, (err) => {
      console.log(err);
    });
    console.log("delete privuse path...");
  }
  (update.title = req.body.title),
    (update.date = req.body.date),
    (update.Produced = req.body.Produced),
    (update.Directed = req.body.Directed),
    (update.genre = req.body.genre);
  update.rating = req.body.rating;

  if (req.file) {
    update.path = req.file.path;
  }

  const updatedMovie = await mongooesModal.findByIdAndUpdate(id, update, {
    new: true,
  });

  console.log("updatedMovie", updatedMovie);

  res.redirect("/");
};
const deleteMovie = async (req, res) => {
  const { id } = req.params;

  const movieDelete = await mongooesModal.findByIdAndDelete(id);

  res.redirect("/");
};
module.exports = { localHost, hostSubmit, editMovie, movieUpdate, deleteMovie };
