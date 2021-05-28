const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);
  var result=num1+num2;
  res.send( result);
});
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var height=parseFloat(req.body.h);
  var weight=parseFloat(req.body.w);
  var bmi=weight/(height*height);
  res.send( "your bmi is :"+ bmi);
});
app.listen(3000,function()
{
  console.log("running");
});
