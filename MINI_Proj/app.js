var express=require("express")
var fs=require("fs");
var bodyparser=require("body-parser");
const { urlencoded } = require("body-parser");

var app=express();
var urlEncodedParser= bodyparser.urlencoded({extended:false})

app.set('view engine','ejs')

app.use('/assets',express.static("assets"))
app.get("/",(req,res)=>{
    res.render("index")
}) 

app.get("/contact",(req,res)=>{
    res.render("contacts")
}) 

app.get('/orderid/:id',(req,res)=>{
    var data= {Productname: "Massager",Cost:"250",specifications:["5 hrs run time","Faster Charginging","2 * AA Batteries"]}

    res.render("orderpage",{id: req.params.id,data:data}) 
})

app.get('/inventory',(req,res)=>{
    res.render('inventory',{qp:req.query})
})

app.post('/inventory',urlEncodedParser,(req,res)=>{
    console.log(req.body)
    res.render('inventory',{qp:req.body})
})

app.get('*',(req,res)=>{
    res.render("404")
})





app.listen(8000,()=>{
    console.log("Server started")
});