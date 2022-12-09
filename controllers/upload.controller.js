
const uploadSingleFile = (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error with the upload of the file' })
    }
    res.json({ cloudinary_url: req.file.path })
}

module.exports = { uploadSingleFile }
