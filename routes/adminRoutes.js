const express = require('express');
const { viewAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();
router.get('/assignments', authenticate, viewAssignments);
router.post('/assignments/:id/accept', authenticate, acceptAssignment);
router.post('/assignments/:id/reject', authenticate, rejectAssignment);

module.exports = router;
