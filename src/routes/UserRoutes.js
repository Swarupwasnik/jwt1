const express=require('express');
const { signup, signin}=require("../controller/userController");
const userRouter=require('express').Router();

userRouter.post("/signup",signup);

userRouter.post("/signin",signin);


module.exports=userRouter;