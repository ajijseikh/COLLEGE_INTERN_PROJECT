const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")



///<======================================== create College ==========================================>

// const createCollege = async function (req, res) {
//     try {
//         const data = req.body
//         let { name, fullName, logoLink } = data

//         if (Object.keys(data).length == 0) {
//             return res.status(400).send({ status: false, msg: "Data is required to add a college" })
//         }
//         if (!name || !name.trim()) {
//             return res.status(400).send({ status: false, msg: "Name is required" })
//         }

//         if (!/^([a-zA-Z. ]){1,100}$/.test(name)) {
//             return res.status(400).send({ status: false, msg: "Name should contain only alphabetic chacraters and should be lower case" })
//         }

//         if (!fullName || !fullName.trim()) {
//             return res.status(400).send({ status: false, msg: "Full Name is required" })
//         }

//         if (!/^([a-zA-Z. ]){1,100}$/.test(fullName)) {
//             return res.status(400).send({ status: false, msg: "Fullname should contain only alphabetic chacraters" })
//         }

//         if (!logoLink || !logoLink.trim()) {
//             return res.status(400).send({ status: false, msg: "LogoLink is required" })
//         }


//         const collegeExist = await collegeModel.findOne({ name: name })

//         if (collegeExist) {
//             return res.status(409).send({ status: false, msg: "college name already exits" })
//         }
//         let createdCollege = await collegeModel.create(data)
//         return res.status(201).send({ status: true, data: createdCollege })
//     }
//     catch (err) {
//         res.status(500).send({ status: false, msg: err.message })
//     }

// }


// /<======================================== create College ==========================================>



// ---------------------------------------------- this is for author validation ------------------------------------------------
function isValidName(value) {
    if (typeof value !== "string" || value.trim() == "") { return false }
    var isValid = /^([a-z]){2,20}$/
    return isValid.test(value.trim());
}
function isValidFullName(value) {
    if (typeof value !== "string" || value.trim() == "") { return false }
    var isValid = /^([a-z A-Z]){2,100}$/
    return isValid.test(value.trim());
}


const createCollege = async function (req, res) {
    try {
        const data = req.body
        let { name, fullName, logoLink } = data
        

        console.log(name, fullName, logoLink);

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "Data is required to add a college" })
        }

        if (!name) return res.status(400).send({ status: false, msg: "Name is mandatory" })

        if (!isValidName(name)) return res.status(400).send({ status: false, msg: "Invalid Name, available characters ( a-z ) with minimum 2 characters" })


        if (isValidFullName(fullName) == false) return res.status(400).send({ status: false, msg: "Invalid FullName, available characters ( a-z A-Z ) with maximum 100 characters" })

        //---------------------

        if (!logoLink) { return res.status(400).send({ status: false, msg: "LogoLink is required" }) }
        if (!logoLink.trim()) {
            return res.status(400).send({ status: false, msg: "LogoLink is required" })
        }



        const collegeExist = await collegeModel.findOne({ name: name })

        if (collegeExist) {
            return res.status(409).send({ status: false, msg: "College name already exists" })
        }
        let createdCollege = await collegeModel.create(data)
        return res.status(201).send({ status: true, data: createdCollege })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}




// <====================================================== get colleges ======================================================>

const getCollege = async function (req, res) {
    try {

        const collegeName = req.query.collegeName

        const collegeFilter = {}

        collegeFilter.name = collegeName.toLowerCase()
        collegeFilter.isDeleted = false

        const college = await collegeModel.findOne(collegeFilter)

        if (!college) return res.status(404).send({ status: false, msg: "No college found" })

        const internFilter = {}
        internFilter.collegeId = college._id
        internFilter.isDeleted = false

        const interns = await internModel.find(internFilter).select({ name: 1, email: 1, mobile: 1 })//.count()

        const internList = {}
        internList.name = college.name
        internList.fullName = college.fullName
        internList.logoLink = college.logoLink
        internList.interns = ["No intern apply for this college.. !"]
        if (interns.length > 0) { internList.interns = interns }

        return res.status(200).send({ status: true, msg: "data found", data: internList })
    }

    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })

    }
}

module.exports.createCollege = createCollege

module.exports.getCollege = getCollege