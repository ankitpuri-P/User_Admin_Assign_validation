const Joi = require('joi');

// Register Schema
const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('User', 'Admin').required()
});

// Login Schema
const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

// Schema for assignment upload 
const assignmentSchema = Joi.object({
  task: Joi.string().min(5).required(),
  adminId: Joi.string().required(),
});

// Exporting all schemas
module.exports = {
  userSchema,
  loginSchema,
  assignmentSchema
};
