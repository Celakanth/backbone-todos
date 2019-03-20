const User = Backbone.Model.extend({
    urlRoot: "https://sheltered-dusk-97652.herokuapp.com/user",

    validate: function(attrs) {
        if (!(attrs.email && attrs.password)) {
            throw new Error("User infromation must be set");
        }
    },

    events: {
        "onClick #login": "onLoginClick"
    },

    onLoginClick: function(e) {
        e.preventDefault();
        console.log("User Model")
    }





})