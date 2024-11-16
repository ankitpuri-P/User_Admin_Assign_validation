const express = require('express');
const { uploadAssignment, fetchAdmins } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();
router.post('/upload', authenticate, uploadAssignment);
router.get('/admins', authenticate, fetchAdmins);

module.exports = router;
