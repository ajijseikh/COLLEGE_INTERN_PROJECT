const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const route=require("./routes/route")
const app=express()

app.use(bodyParser.json())


mongoose.connect("mongodb+srv://ajij:7pt2AejwcFh1o56K@cluster0.dwd5pcx.mongodb.net/group57Database?retryWrites=true&w=majority")

.then(()=>console.log("MongoDB is Connnected"))
.catch(err=>console.log(err))


app.use("/",route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});