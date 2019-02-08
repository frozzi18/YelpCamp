var express = require("express")
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds=[
		{name:"Kampung Lio", image:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f9c57eaeeebdb0_340.jpg"},
		{name:"Kampung Gajah", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f9c57eaeeebdb0_340.jpg"},
		{name:"Hutan Rote", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"}
];

app.get("/", function(req,res){
	res.render("landing");
});

app.get("/campgrounds", function(req,res){
	

	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
	// res.send("YOU HIT THE POST ROUTE"); //For checking
	//get data from from add and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name:name, image:image}

	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect("/campgrounds");

});

app.get("/campgrounds/new", function(req,res){
	res.render("new.ejs");
})


app.listen(3000,function(){
	console.log("The YelpCamp Server Has Started!");
});
