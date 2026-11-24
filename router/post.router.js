const express = require('express');
const { fileUpload } = require('../controllers/postController');
const multer = require('multer');
// const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (_req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + "-" + file.originalname);
  },
});


const upload = multer({ storage: storage });

router.post('/profile', upload.single('file'), fileUpload);

module.exports = router
