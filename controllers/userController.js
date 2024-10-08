const User = require("../models/user");

// List all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.render("users/list", { users });
};

// Render form to create a new user
exports.getCreateUser = (req, res) => {
  res.render("users/create");
};

// Add new user to the database
exports.postCreateUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = new User({ name, email, age });
  await user.save();
  res.redirect("/users");
};

// Render form to edit user data
exports.getEditUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/edit", { user });
};

// Update user data in the database
exports.postEditUser = async (req, res) => {
  const { name, email, age } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, email, age });
  res.redirect("/users");
};

// Delete a user from the database
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/users");
};
