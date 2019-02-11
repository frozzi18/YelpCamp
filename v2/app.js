var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose")

// The database made it automatically
mongoose.connect("mongodb://localhost/yelp_camp",  { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// The schema setup
var campgroundSchema = new mongoose.Schema({
	name:String,
	image:String,
	description:String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name:"Kampung Lio", 
// 		image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f9c77ba2efb6bc_340.jpg",
// 		description:"This is kampung with beautiful forest and animals. No bathroom. Live with nature!"
// 	}, function(err,a){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("Newly Created Campground: ");
// 			console.log(a);
// 		}
// 	}
// )


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


//INDEX - show all campgrounds
app.get("/campgrounds", function(req,res){
	// Get all campgrounds from DB
	Campground.find({}, function(err,allCampground){
			if(err){
				console.log(err);
			} else {
				// console.log(a);
				res.render("index", {campgrounds:allCampground});
			}
		}
	)
});

//CREATE- add new campground to DB
app.post("/campgrounds", function(req,res){
	// res.send("YOU HIT THE POST ROUTE"); //For checking
	//get data from from add and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name:name, image:image, description:desc}

	Campground.create(newCampground, function(err,newCampgroundAdded){
			if(err){
				console.log(err);
			} else {
				console.log("Successfully add new campground");
				// redirect back to campgrounds page
				res.redirect("/campgrounds");
			}
		}
	)	

});

// CREATE - show form to create new campground
app.get("/campgrounds/new", function(req,res){
	res.render("new.ejs");
})

//This line must be after other get routes, order is important
// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req,res){
	// Find the campground with the provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			// render show template with that campground
			res.render("show", {campground:foundCampground});
		}
	})
	// res.send("this will be the show page one day")
})


app.listen(3000,function(){
	console.log("The YelpCamp Server Has Started!");
});
