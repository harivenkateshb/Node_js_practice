var mongoose= require("mongoose")

const uri = "mongodb+srv://test:UlOwtorWsa3IscNK@cluster0.jtgpe.mongodb.net/todo?retryWrites=true&w=majority";


const connectdb=async()=>{
    await mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true })
    console.log("dbconnected")
}

module.exports=connectdb