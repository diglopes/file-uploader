const express = require("express")
const multer = require("multer")

const app = express()
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage })

app.use(express.static("public"))
app.post("/file/upload", upload.single("file"), (req, res) => {
    res.send("<h2>Upload done successfully!<h2>")
})

app.listen(3000, () => console.log("App running"))