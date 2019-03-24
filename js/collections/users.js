var Users = Backbone.Collection.extend({
    model: User,
    url: "localhost:3000/users/login",

    events: {
        "click #login": "onClickLogin"

    },

    onClickLogin: function(e) {
        e.preventDefault();
        console.log("happy Days")
    }

})