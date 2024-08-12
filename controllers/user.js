const userModel = require("../models/user");

//create user and save to db
//@route POST/create_user
const createUser = async (req, res) => {
  const body = req.body;
  const newuser = new userModel(body);
  try {
    const saveduser = await newuser.save();
    res.status(201).json(saveduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all users in descending order
// nb: removing the .sort method would get all users in ascending order
// @route GET/users
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get single user by id
// @route GET /:id
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get single user by email
// @route GET /:email
const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await userModel.findOne({ email: email });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update a username from the req.body
//@route PUT/update
const updateUser = async (req, res) => {
  const { id, username } = req.body;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { username },
      { new: true }
    );
    res.status(200).json({ message: "user details updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update a user using req.params.id and updates passed in the body
//@route PUT/:id
const editUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const editedUser = await userModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json({ message: "details updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a user from the req.body
//@route DELETE/delete
const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "this user has been deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//deleting a user using req.params.id
//@route DELETE/:id
const delUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
  editUser,
  delUser,
};
