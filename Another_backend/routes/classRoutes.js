// routes/classRoutes.js
const express = require('express');
const router = express.Router();
const classController = require('../controllers/classControllers');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), classController.createClass);
router.get('/', classController.getClasses);

module.exports = router;
