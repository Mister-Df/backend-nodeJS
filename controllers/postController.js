const modelPost = require("../models");
// const multer = require("multer");



async function fileUpload(req, res) {
  const post = {
    imageName: req.body.imageName,
    description: req.body.description,
    image: req.file ? req.file.path : null
    // user_id: User,
  };

  try {
    const create = await modelPost.Poste.create(post)
    return res.status(201).json({
      message: 'post cree avec success',
      data: create
    })
    
  }catch (error) {
    res.status(500).json({
      message: 'Erreur',
      Error: error.message
    })
  }
}

module.exports = { fileUpload };
