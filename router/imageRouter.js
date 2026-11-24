const express = require('express')
const { checkAuth } = require('../middleware/check.auth')
const upload = require('../uploads/image-uploade')
const imageUpload = require('../controllers/imageController')


const router = express.Router()

router.post('/uploads', checkAuth, upload.single('image'), imageUpload)
// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// });


module.exports = router