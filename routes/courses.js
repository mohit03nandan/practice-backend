const {Router} = require("express")
const { syncBuiltinESMExports } = require("module")

const route = Router()

const courses = [
    {
        type : "mathematics",
        cost : "$100"
    },
    {
        type : "chemestry",
        cost : "$50"
    },
    {
        type : "physics",
        cost : "$90"
    }
]


route.get("/",(req,res)=>{
    res.send("we are in courses ")
})


route.get("/types",(req,res)=>{
    res.send(courses)
})



module.exports =  route