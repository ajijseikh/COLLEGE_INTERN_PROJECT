const validUrl = require('valid-url');

const objectId = require('mongoose').Types.ObjectId

// check body is empty or not
const isBodyEmpty = function(data)
{
    if(Object.keys(data).length == 0) return true
    return false;
}

// // validation for empty or not / key present or not
// const isValid = function(ajij)
// {
//     if(typeof asis === 'undefined' || ajij === null ) return false
//     if(typeof asis === 'string' && ajij.trim().length === 0) return false
//     return true;
// }


const isValidOjectId = function(id)
{
    if(objectId.isValid(id)) return true;
    return false;
}

const isValidUrl = function(url)
{
    if (validUrl.isUri(url)) return true;
    return false
}

// validate email address 
const isValidEmail = (email) => {
    let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regEx.test(email)
}

// validate phone number 
const isValidMobile = (number) => {
    let regEx = /^(\+\d{1,3}[- ]?)?\d{10}$/
    return regEx.test(number)
}

//validate name for upper case abbrivated name
const upar_case = function (fun) {
    return fun.toUpperCase()
}

const lower_case = function (fun) {
    return fun.toLowerCase()
}




// // check abbr name is valid or not 
// const isValidAbbr = function(name,fullName)
// {
//     let fullname1=fullName.replace(","," ")
//     let fullname2=fullname1.replace("-"," ");
//     let nameArr = fullname2.split(" ") 
//     let abbr =''
//     for(let i=0;i<nameArr.length;i++)
//         {
//             let temp =nameArr[i].charAt(0) 
//             abbr = abbr+temp 
//         }
//     if(abbr.toUpperCase() == name.toUpperCase() ) 
//     {
//         return true
//     }
//     else return false
// }



module.exports ={ isBodyEmpty , isValid, isValidUrl, validateEmail, isVerifyString, isValidOjectId , isValidMobileNo,isVerifyStringForAbbr,isValidAbbr}