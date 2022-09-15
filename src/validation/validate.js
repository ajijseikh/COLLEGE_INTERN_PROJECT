
// -------------------------- this is for college validation ----------------------------

function isValidName(value) {
    if (typeof value !== "string" || value.trim() == "") { return false }
    let isValid = /^([a-z]){2,20}$/
    return isValid.test(value.trim());
}


function isValidFullName(value) {
    if (typeof value !== "string" || value.trim() == "") { return false }
    let isValid = /^([a-z A-Z]){2,100}$/
    return isValid.test(value.trim());
}


function isValidLogoLink(value) {
    if (typeof value !== "string" || value.trim() == "") { return false }

    let isValid = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%\+.~#?&\/=]*)$/
    if (isValid.test(value.trim()) == false) return false

    let extention = /(\.jpeg|\.jpg|\.png)$/i;
    return extention.test(value.trim());
}




// -------------------------- this is for interns validation ----------------------------

const isValidEmail = (email) => {
    let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regEx.test(email)
}


const isValidMobile = (number) => {
    let regEx = /^(\+\d{1,3}[- ]?)?\d{10}$/
    return regEx.test(number)
}


const upper_case = function (fun) {
    return fun.toUpperCase()
}


const lower_case = function (fun) {
    return fun.toLowerCase()
}



module.exports = { isValidName, isValidFullName, isValidLogoLink, isValidEmail, isValidMobile, upper_case, lower_case }