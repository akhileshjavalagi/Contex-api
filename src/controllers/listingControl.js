const express = require("express")
const Listing  = require("../models/listing")

const router = express.Router()

router.get("/", async (req,res)=>{
    try{
        const listing = await Listing.find().lean().exec();
        
		return res.send(listing)
    }catch(e){
        return res.send(e.message)
    }
})

router.post("/",async (req,res)=>{
    try{
        const listing = await Listing.create(req.body)
        return res.send(listing)
    }catch(e){
        console.log(e.message)
    }
})

router.get("/:id",async (req,res)=>{
    try{
        const listing = await Listing.findById(req.params.id).lean().exec()
        return res.send(listing)
    }catch(e){
        console.loeg(e.message)
    }
})


module.exports = router