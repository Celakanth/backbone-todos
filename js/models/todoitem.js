/*
    todo item model
*/
const TodoItem = Backbone.Model.extend({
    defaults: {
        completed: false
    },

    urlRoot: "http://jsonplaceholder.typicode.com/todos",

    validate: function(attrs){
        if(!attrs.tiile){
            return "No description added";
        }
    },

    toggle: function(){
        this.set("completed", !this.get("completed"))
    }
});
