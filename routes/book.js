const {Router} = require("express")

const route = Router()

route.get("/", (req,res)=>{
   res.send("we are in book route here! ")
})

route.get("/section", (req,res)=>{
    res.send("we are in book route here and there is section also! ")
 })

route.get("/:id", (req,res)=>{
    const id  = req.params.id
    res.send(id)
 })

 route.get("/:name", (req,res)=>{
    const name  = req.params.id
    res.send(name)
})

module.exports = route;
