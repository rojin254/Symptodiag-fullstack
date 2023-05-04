const express = require("express");
const router = express.Router();
const { User } = require("../models");
console.log(User)
router.get("/", async (req, res) => {
  const listOfUsers = await User.findAll();
  res.json(listOfUsers);
});

router.post("/", async (req, res) => {
  const post = req.body;
  console.log(post.users[0])
  await User.create(post.users[0]);
  res.json(post);
});

module.exports = router;
