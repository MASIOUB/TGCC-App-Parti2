const express = require('express');
const router = express.Router();
const { createFiliale, getAllFiliales } = require('../controllers/filialeController');

router.route('/').post(createFiliale).get(getAllFiliales);

module.exports = router;