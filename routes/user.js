const express = require("express");
const route = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
  editUser,
  delUser,
} = require("../controllers/user");

route.post("/create_user", createUser);
route.get("/users", getUsers);
route.get("/users/:id", getUserById);
route.get("/users/:email", getUserByEmail);
route.put("/users/update", updateUser);
route.delete("/users/delete", deleteUser);
route.put("/users/:id", editUser);
route.delete("/users/:id", delUser);

module.exports = route;
