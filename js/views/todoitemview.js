const TodoItemView = Backbone.View.extend({
    tagName: "li",
    initialize: function(options) {
        if (!(options && options.model)) {
            throw new Error("No model specified");
        }
        this.model.on("change", this.render, this);

    },

    events: {
        "click #toggle": "onClickToggle",
        "click #delete": "onClickDelete"
    },

    onClickDelete: function() {
        this.model.destroy();
    },

    onClickToggle: function(e) {
        this.model.toggle();
        this.model.save();
        console.log(this.model);

    },

    render: function() {
        const isCompleted = this.model.get("completed");
        this.$el.attr("id", this.model.get("id"));
        this.$el.toggleClass("completed", isCompleted);
        this.$el.html("<input id='toggle' type='checkbox' " + (isCompleted ? "checked='true'" : "") + "></input>" + this.model.escape("title") + "<button id='delete'>Delete</button>");
        return this;
    }
});