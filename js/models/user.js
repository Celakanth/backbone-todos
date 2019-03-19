const User = Backbone.Model.extend({
    validate: function(attrs) {
        if (!(attrs.email && attrs.password)) {
            throw new Error("User infromation must be set");
        }
    },


    onClickLogin: function(e) {
        e.preventDefault();
        console.log("this is it");
    }



})