var Users = Backbone.Collection.extend({
    model: User,
    url: "https://sheltered-dusk-97652.herokuapp.com/user",

    events: {
        "click #login": "onClickLogin"

    },

    onClickLogin: function(e) {
        e.preventDefault();
        console.log("happy Days")
    }

})