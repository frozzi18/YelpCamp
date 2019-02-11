#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

INDEX       /dogs           GET             Display a list of all dog
NEW         /dogs/new       GET             Display form to make a new dog
CREATE      /dogs           POST            Add new dog to DB. Create a new dog, then redirect somewhere
SHOW        /dogs/:id       GET             Show info about one dog

INDEX       /campgrounds
NEW         /campgrounds/new
CREATE      /campgrounds
SHOW        /campgrounds/:id

NEW         campgrounds/:id/comments/new    GET
CREATE      campgrounds/:id/comments        POST