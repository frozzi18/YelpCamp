## Editing Campgrounds
* Add Method-Override
* Add edit route for campgrounds
* Add link to edit page
* Add update route
* Fix $set problem

## Deleting Campgrounds
* Add Destroy route
* Add Delete button

## Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

## Editing comments
* Add edit route for comments
* Add edit button
* Add update route

Campground Edit route   :   /campgrounds/:id/edit
Comment Edit route      :   /campgrounds/:id/comments/:comment_id/edit

## Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy route   :   /campgrounds/:id
Comment Destroy route      :   /campgrounds/:id/comments/:comment_id

## Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/show edit and delete buttons
* Refactor middleware 