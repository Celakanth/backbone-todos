const TodoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },

    url: "fakeURL",
    
    validate: function(attrs){
        if(!attrs.description){
            return "No description added";
        }
    },
    toggle: function () {
        this.set("isCompleted", !this.get("isCompleted"));
    }
});
