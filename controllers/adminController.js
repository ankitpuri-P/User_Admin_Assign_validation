const Assignment = require('../models/assignment');

const viewAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ adminId: req.user.id }).populate('userId', 'username');
    res.json(assignments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const acceptAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndUpdate(req.params.id, { status: 'Accepted' });
    res.json({ message: 'Assignment accepted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const rejectAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndUpdate(req.params.id, { status: 'Rejected' });
    res.json({ message: 'Assignment rejected' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { viewAssignments, acceptAssignment, rejectAssignment };
