const router = require("express").Router()

const uploader = require('./../config/cloudinary.config')
const { uploadSingleFile } = require('./../controllers/upload.controller')

router.post('/image', uploader.single('imageData'), uploadSingleFile)

module.exports = router