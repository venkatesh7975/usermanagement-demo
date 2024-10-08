const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// List all users
router.get("/users", userController.getUsers);

// Create a new user
router.get("/users/create", userController.getCreateUser);
router.post("/users/create", userController.postCreateUser);

// Edit user
router.get("/users/edit/:id", userController.getEditUser);
router.post("/users/edit/:id", userController.postEditUser);

// Delete user
router.get("/users/delete/:id", userController.deleteUser);

module.exports = router;
