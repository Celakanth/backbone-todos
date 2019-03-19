const UserView = Backbone.View.extend({
    initialize: function(options) {

    },
    events: {
        "click #login": "onClickLogin"
    },

    onClickLogin: function(e) {
        e.preventDefault();

    },

    render: function() {
        const template = _.template($('#userTemplate').html());
        const html = template();
        this.$el = $('#container');
        this.$el.html(html);
        return this;
    }
})