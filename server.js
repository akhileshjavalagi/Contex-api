const express = require ("express");
const mongoose = require ("mongoose");
const listingControler = require("./src/controllers/listingControl")
const app = express();
app.use(express.json());

const connect = () =>{
        return mongoose.connect(
            "mongodb+srv://akhilesh:akhilesh@cluster0.bckwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        ) 
}
app.use("/listing",listingControler)

app.listen(3001,async function(){
    try{
        await connect();
        console.log("listing on port 2345")
    }catch(e){
        console.log(e.message)
    }
})

