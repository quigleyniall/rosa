const express = require("express"),
      app = express();

app.set("view engine","ejs")
app.use(express.static(__dirname +'/public'))

app.get("/", function(req,res){
  res.render("index")
})
app.get("/reservation", function(req,res){
  res.render("reservation")
})
app.get("/menu", function(req,res){
  res.render("menu")
})
app.get("/contact", function(req,res){
  res.render("contact")
})
app.get("/shop", function(req,res){
  res.render("shop")
})
app.get("/blog", function(req,res){
  res.render("blog")
})
var PORT = process.env.PORT || 8080

app.listen(PORT, function(req,res){
  console.log("Server Running!")
})
