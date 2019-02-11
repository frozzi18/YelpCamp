var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	Campground	= require("./models/campground"),
	Comment		= require("./models/comment"),
	seedDB		= require("./seeds")
	// Comment		= require("./models/comment"),
	// User		= require("./models/user")



// The database made it automatically
mongoose.connect("mongodb://localhost/yelp_camp_v4",  { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();


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
				res.render("campgrounds/index", {campgrounds:allCampground});
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
	res.render("campgrounds/new");
})

//This line must be after other get routes, order is important
// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req,res){
	// Find the campground with the provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			console.log(foundCampground);
			// render show template with that campground
			res.render("campgrounds/show", {campground:foundCampground});
		}
	})
	// res.send("this will be the show page one day")
})

//==================
// COMMENT ROUTES
//==================

app.get("/campgrounds/:id/comments/new", function(req,res){
	// res.send("THIS IS WILL BE THE COMMENT FORM");
	
	//find campground by id
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {campground: campground});
			
		}
	})
});

app.post("/campgrounds/:id/comments", function(req,res){
	// lookup campground using ID
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		} else {
			// console.log(req.body.comment);
			Comment.create(req.body.comment, function(err,comment){
				if(err){
					console.log(err);
				} else {
					campground.comments.push(comment);
					campground.save();
					res.redirect('/campgrounds/'+campground._id);
				}
			})
		}
	})
	// create a new comment
	// connect new comment to campground
	// redirect campground show page
})




app.listen(3000,function(){
	console.log("The YelpCamp Server Has Started!");
});
