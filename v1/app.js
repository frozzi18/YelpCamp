var express = require("express")
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds=[
		{name:"Kampung Lio", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f9c77ba2efb6bc_340.jpg"},
		{name:"Kampung Gajah", image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b014459cf6c37ca5eeb1_340.jpg"},
		{name:"Hutan Rote", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
		{name:"Kampung Lio", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f9c77ba2efb6bc_340.jpg"},
		{name:"Kampung Gajah", image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b014459cf6c37ca5eeb1_340.jpg"},
		{name:"Hutan Rote", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
		{name:"Kampung Lio", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f9c77ba2efb6bc_340.jpg"},
		{name:"Kampung Gajah", image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b014459cf6c37ca5eeb1_340.jpg"},
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
