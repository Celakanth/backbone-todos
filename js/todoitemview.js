const TodoItemView = Backbone.View.extend({
    tagName: "li",
    initialize: function(options){
        if(!(options && options.model)){
            throw new Error("No model specified");
        }

    },

    events:{
        "click #toggle": "onClickToggle"
    },

    onClickToggle: function(e){
        console.log("Checkbox clicked");
        
    },

    render: function(){
        this.$el.html("<input id='toggle' type='checkbox'></input>" + this.model.escape("description"));
        return this;
    }
});