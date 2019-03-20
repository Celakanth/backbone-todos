const User = Backbone.Model.extend({
    urlRoot: "http://127.0.0.1:3000/users/login",

    initialize: function(){
        this.model = new User({});
        this.model.on("change", this.onUpdated, this);
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