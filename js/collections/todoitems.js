/*
    Todo Items collection
*/

var TodoItems = Backbone.Collection.extend({
	model: TodoItem,

	url: "http://localhost:3000/todos",

	
});

