const express=require("express");
const { getNote, createNote, updateNote , deleteNote} = require("../controller/noteController");
const auth=require("../middleware/auth")
const noteRouter=require('express').Router();

noteRouter.get("/", auth ,getNote);
    

noteRouter.post("/",auth,createNote);
noteRouter.delete("/:id",auth,deleteNote)  ;  

noteRouter.put("/:id",auth,updateNote);



module.exports=noteRouter;