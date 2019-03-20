var UserView = Backbone.View.extend({
    initialize: function() {
        
        
    },

    events: {
        "click #login": "onClickLogin"
    },

    onSaveClick: function(user){
        console.log("Saved");
    },

    onClickLogin: function(e) {
        e.preventDefault();
        this.model = new User({email:$('#email').val(), password:$("#pass")});
        this.model.save({
            success: function(){
                console.log(this.model)
            },
            error: function(err){
                console.log(err);
            }
        });
        console.log("happy Days")
    },

    render: function() {
        const template = _.template($('#userTemplate').html());
        const html = template();
        this.$el.html(html);
        return this;
    }
})