const express=require('express');
const router=express.Router();

const {Diseases} = require("../models");

router.get('/',async(req,res)=>{
    const listOfDiseases=await Diseases.findAll();
    res.json(listOfDiseases);
});

// router.post("/", async (req, res) => {
//     const post = req.body;
//     await Diseases.create(post);
//     res.json(post);
//   });


module.exports=router;