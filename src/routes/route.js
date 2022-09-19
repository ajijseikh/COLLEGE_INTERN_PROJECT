const express = require("express")
const router = express.Router()
const collegeController = require("../controller/collegeController")
const internController = require("../controller/internController")




router.post("/functionup/interns", internController.createIntern)

router.post("/functionup/colleges", collegeController.createCollege)

router.get("/functionup/collegeDetails", collegeController.getCollege)

router.all("/*", function (req ,res){
    res.status(400).send("Invalid request........!!!")
})


module.exports = router
