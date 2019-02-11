#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES

name        url             HTTP verb        desc.                                                      
===================================================================
INDEX       /dogs           GET             Display a list of all dog
NEW         /dogs/new       GET             Display form to make a new dog
CREATE      /dogs           POST            Add new dog to DB. Create a new dog, then redirect somewhere
SHOW        /dogs/:id       GET             Show info about one dog

EDIT        /dogs/:id/edit  GET             Show edit form for one dog
UPDATE      /dogs/:id       PUT             Update a particular dog, then redirect somewhere
DESTROY     /dogs/:id       DELETE          Delete a particular dog, then redirect somewhere

REST - a mapping between HTTP routes and CRUD (Create, Read, Update, and Destroy)
Routes pattern that can we follow.

name            mongoose method
==============================
INDEX           Dog.find()
NEW             N/A
CREATE          Dog.create()
SHOW            Dog.findById()
EDIT            Dog.findById()
UPDATE          Dog.findByIdAndUpdate()
DESTROY         Dog.findByIdAndRemove()




