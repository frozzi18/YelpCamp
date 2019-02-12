var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data=[
    {  
        name:"Hutan Rote", 
        image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue non purus vel maximus. Phasellus tempor purus ut lorem porttitor blandit. Vivamus interdum, lorem ut elementum auctor, nisl nunc efficitur turpis, posuere volutpat enim ligula quis nibh. Proin iaculis tincidunt velit eu pretium. Nulla sed varius ante, ac commodo magna. Sed tortor nisi, venenatis venenatis luctus quis, vulputate a augue. Nunc sit amet molestie massa, nec dictum diam. Mauris eu nunc vitae sapien venenatis ultrices. Fusce odio risus, ornare vitae aliquam non, imperdiet id lorem. Nunc non nunc nibh. Nulla facilisi. Curabitur porttitor, diam nec gravida molestie, ipsum neque mattis nisi, sit amet vulputate tellus sapien vitae nunc.s"
    },
    {  
        name:"Hutan Bali", 
        image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b014459cf8c27ca4e5bc_340.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue non purus vel maximus. Phasellus tempor purus ut lorem porttitor blandit. Vivamus interdum, lorem ut elementum auctor, nisl nunc efficitur turpis, posuere volutpat enim ligula quis nibh. Proin iaculis tincidunt velit eu pretium. Nulla sed varius ante, ac commodo magna. Sed tortor nisi, venenatis venenatis luctus quis, vulputate a augue. Nunc sit amet molestie massa, nec dictum diam. Mauris eu nunc vitae sapien venenatis ultrices. Fusce odio risus, ornare vitae aliquam non, imperdiet id lorem. Nunc non nunc nibh. Nulla facilisi. Curabitur porttitor, diam nec gravida molestie, ipsum neque mattis nisi, sit amet vulputate tellus sapien vitae nunc."
    },
    {  
        name:"Hutan Ambon", 
        image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f9c97aa2eebdb1_340.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue non purus vel maximus. Phasellus tempor purus ut lorem porttitor blandit. Vivamus interdum, lorem ut elementum auctor, nisl nunc efficitur turpis, posuere volutpat enim ligula quis nibh. Proin iaculis tincidunt velit eu pretium. Nulla sed varius ante, ac commodo magna. Sed tortor nisi, venenatis venenatis luctus quis, vulputate a augue. Nunc sit amet molestie massa, nec dictum diam. Mauris eu nunc vitae sapien venenatis ultrices. Fusce odio risus, ornare vitae aliquam non, imperdiet id lorem. Nunc non nunc nibh. Nulla facilisi. Curabitur porttitor, diam nec gravida molestie, ipsum neque mattis nisi, sit amet vulputate tellus sapien vitae nunc."
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
