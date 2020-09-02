var express =require("express")
var todocontroller=require("./controllers/todocontroller")
var app= express()

//set the template engine
app.set('view engine','ejs')

//set the static files that acts as a middle ware.
app.use(express.static("./public"))

//fire the todo controller
todocontroller(app)

//start the server
app.listen(3000,()=>{
    console.log("Server started")
})

