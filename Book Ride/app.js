const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


let sourceArray = ["Ghatkopar","Dadar","Vasai","Thane"];
let destinationArray = ["Andheri","Versova","Churchgate","CSMT"];
let vehicleArray = ["Sedan","SUV","Micro","Luxury"];


app.get("/",function(req,res){
    res.render("ride",{sourceArray:sourceArray, destinationArray:destinationArray, vehicleArray:vehicleArray});
});

app.post("/",function(req,res){
    console.log("Post received on Home route");
});





app.listen("3000",function(){
    console.log("Server running on port 3000");
});