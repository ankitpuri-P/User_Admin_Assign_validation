// assignmentRoute.js
const express = require('express');
const router = express.Router();
const { uploadAssignment: adminUploadAssignment } = require('../controllers/assignmentController');  // Admin uploads assignments
const { uploadAssignment: userUploadAssignment, fetchAdmins } = require('../controllers/userController');  // User uploads assignments, fetch admins
const { viewAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');  // Admin can view, accept, and reject assignments
const { authenticate } = require('../middlewares/authMiddleware');

// User Routes
router.post('/upload', authenticate, userUploadAssignment);  // User uploads an assignment
router.get('/admins', authenticate, fetchAdmins);  // User fetches admins

// Admin Routes
router.post('/upload', authenticate, adminUploadAssignment);  // Admin uploads an assignment
router.get('/', authenticate, viewAssignments);  // Admin views all assignments
router.post('/:id/accept', authenticate, acceptAssignment);  // Admin accepts an assignment
router.post('/:id/reject', authenticate, rejectAssignment);  // Admin rejects an assignment

module.exports = router;
