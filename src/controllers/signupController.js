const signupModel = require('../models/signupModel');
const responseView = require('../views/responseView');
 
module.exports = {
  async listUsers(req, res) {
    try {
      const users = await signupModel.getAllUsers();
      responseView.sendSuccess(res, users);
    } catch (err) {
      responseView.sendError(res, 'Failed to fetch users', err);
    }
  },
  async createUser(req, res) {
    try {
      const { name, email, phone_number, location, promo_code, queries } = req.body;
      const userId = await signupModel.createUser(name, email, phone_number, location, promo_code, queries);
      responseView.sendSuccess(res, { id: userId, name, email, phone_number, location, promo_code, queries }, 'Sign up successfully');
    } catch (err) {
      responseView.sendError(res, 'Failed to create user', err);
    }
  },
  async getUser(req, res) {
    try {
      const user = await signupModel.getUserById(req.params.id);
      if (!user) {
        return responseView.sendError(res, 'User not found', null, 404);
      }
      responseView.sendSuccess(res, user);
    } catch (err) {
      responseView.sendError(res, 'Failed to fetch user', err);
    }
  },
  async updateUser(req, res) {
    try {
      const { name, email, phone_number, location, promo_code, queries } = req.body;
      await signupModel.updateUser(req.params.id, name, email, phone_number, location, promo_code, queries);
      responseView.sendSuccess(res, null, 'User updated successfully');
    } catch (err) {
      responseView.sendError(res, 'Failed to update user', err);
    }
  },
  async deleteUser(req, res) {
    try {
      await signupModel.deleteUser(req.params.id);
      responseView.sendSuccess(res, null, 'User deleted successfully');
    } catch (err) {
      responseView.sendError(res, 'Failed to delete user', err);
    }
  },
};