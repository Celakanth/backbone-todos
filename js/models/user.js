const User = Backbone.Model.extend({
    urlRoot: "http://localhost:3000/users/login",

    initialize: function(){
        
    },

    onUpdated: function(){
        console.log("Done");
    },

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
    },







})