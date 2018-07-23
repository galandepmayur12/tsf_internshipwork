var express = require("express"),
    bodyParser = require("body-parser");
    

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("index")
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Serever Up and running");
});