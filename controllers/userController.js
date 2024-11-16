const Assignment = require('../models/assignment');
const User = require('../models/user');

const uploadAssignment = async (req, res) => {
  try {
    const { task, adminId } = req.body;
    const assignment = new Assignment({ userId: req.user.id, task, adminId });
    await assignment.save();
    res.status(201).json({ message: 'Assignment uploaded successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fetchAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'Admin' }, 'username');
    res.json(admins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { uploadAssignment, fetchAdmins };
