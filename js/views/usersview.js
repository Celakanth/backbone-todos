var UsersView = Backbone.View.extend({
    events: {
        "click #login": "onClickLogin"

    },

    onClickLogin: function(e) {
        e.preventDefault();
        console.log("happy Days")
    },

    render: function() {
        const template = _.template($('#userTemplate').html());
        const html = template();
        this.$el = $('#container');
        this.$el.html(html);
        return this;
    }
})