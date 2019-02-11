var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data=[
    {  
        name:"Hutan Rote", 
        image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
        description:"fsdflasfaslfasu fjkdasfas"
    },
    {  
        name:"Hutan Bali", 
        image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
        description:"fsdflasfaslfasu fjkdasfas"
    },
    {  
        name:"Hutan Ambon", 
        image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
        description:"fsdflasfaslfasu fjkdasfas"
    }
];


function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds")
            // add a few campground
            data.forEach(seed => {
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // create a comment
                        Comment.create({
                            text: "This place is greate. but no internet",
                            author:"Zoriz"
                        }, function(err,comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();  
                                console.log("created new comment");
                            }
                            
                        })
                    }
                })
            });
        }
    });

    
    // add a few comments
}

module.exports = seedDB;
