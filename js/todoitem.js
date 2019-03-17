const TodoItem = Backbone.Model.extend({
    validate: function(attrs){
        if(!attrs.description){
            return "No description added";
        }
    }
});
