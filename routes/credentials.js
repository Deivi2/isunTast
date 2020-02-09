const express = require("express");
const router = express.Router();
const Credentials = require("../models/Credentials");

router.get("/", (req, res) => {
  Credentials.find()
    .then(credentials => res.json(credentials))
    .catch(error => res.status(404).json({ message: "no credentials found" }));
});

router.post("/", (req, res) => {

  const userCredentials = {};
  if (req.body.name) userCredentials.name = req.body.name;
  if (req.body.surename) userCredentials.surename = req.body.surename;
  if (req.body.gender) userCredentials.gender = req.body.gender;
  if (req.body.dob) userCredentials.dob = req.body.dob;

  Credentials.findOneAndUpdate(
    { _id: req.body.id },
    { $set: userCredentials },
    { new: true }
  )
    .then(userCredential => res.json({ message: "success", userCredential }))
    .catch(err => res.status(404).json({ message: err }));
});

router.delete("/:id", (req, res) => {
  Credentials.findOneAndRemove({ _id: req.params.id })
    .then(userCredential => res.json({ message: "success", userCredential }))
    .catch(err => res.status(404).json({ message: err }));
});

module.exports = router;
