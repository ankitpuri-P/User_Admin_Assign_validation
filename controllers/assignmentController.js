const Assignment = require('../models/assignment');
const jwt = require('jsonwebtoken');

// Controller to handle assignment upload
const uploadAssignment = async (req, res) => {
  try {
    // Extract token from Authorization header
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'No token provided. Authorization denied.' });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Destructure the task and adminId from the request body
    const { task, adminId } = req.body;

    // Check if the user is an admin
    if (decoded.role !== 'Admin') {
      return res.status(403).json({ error: 'Permission denied. Only admins can upload assignments.' });
    }

    // Create new assignment
    const newAssignment = new Assignment({
      task,
      adminId,
      createdBy: decoded.id, // Associate the assignment with the logged-in admin
    });

    // Save the assignment to the database
    await newAssignment.save();

    // Respond with success message
    res.status(201).json({ message: 'Assignment uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload assignment', details: error.message });
  }
};

// Export the function
module.exports = { uploadAssignment };
