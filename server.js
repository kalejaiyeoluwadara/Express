//Replicated Json server -- Made it as simple as possible.

const express = require("express");
const data = require("./data.json");
const app = express();
app.use(express.json());
app.get("/all", (req, res) => {
  res.status(200).json({ status: 200, msg: data });
});
app.get("/currentUser", (req, res) => {
  res.status(200).json(data.currentUser);
});
app.get("/comments", (req, res) => {
  res.status(200).json(data.comments);
});
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(200).json(data.comments[id - 1]);
});
app.listen(5000, () => {
  console.log("server json files");
});
