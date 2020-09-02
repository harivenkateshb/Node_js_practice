var mongoose=require("mongoose")
var bodyparser=require("body-parser")
var connectdb=require("../DB/connectdb")
var todomodel=require("../DB/tododb")
const { json } = require("body-parser")




var data=[{item:"Complete Net Ninja"},{item:"Hacking Wednesday"}]

var urlEncoderparser=bodyparser.urlencoded({extended:false})

module.exports=function(app){
    connectdb();

    app.get('/todo',(req,res)=>{

        todomodel.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{todos:data})    
        })    
})
    app.post('/todo',urlEncoderparser,async (req,res)=>{
        var item=await todomodel(JSON.parse(JSON.stringify(req.body))).save((err,data)=>{
            if(err){
                console.log("Unable to add item")
            }
            else{
                console.log("Item Added successfully"+data)
            }
        })

        await todomodel.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{todos:data})    
        }) 
        
    })
    app.delete('/todo/:item',async(req,res)=>{
        // console.log(req.params.item)
        // data=data.filter(function(todo){
        //     return todo.item.replace(/ /g,'')!==req.params.item
        // })
        // console.log("deleted",data)
        // res.json({})


        //delete
        var deleteitem=await req.params.item.replace(/\-/g," ").trim()
        await todomodel.find({item:deleteitem}).remove(err=>{
            if(err) throw err;
        })
        await todomodel.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{todos:data})    
        }) 
        
    })
}