const express = require('express')
const app = express()
const book = require("./routes/book");
const courses = require("./routes/courses")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//check server is active or not
app.get("/api/health" ,(req,res) =>{
    res.send(`backend server is active status: active & time:${ new Date()}`)
})


app.use("/api/books", book);
app.use("/api/books/section", book);

app.use("/api/courses",courses)
app.use("/api/courses/types",courses)



app.get('/', (req, res) => {
     res.send("hello world")
})



//connection part
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})