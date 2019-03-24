var UserView = Backbone.View.extend({
    initialize: function() {
        if(this.model){
            console.log('Starting');
            this.model.on("change", this.onChenge, this);
        }
    },

    onChange:function(options){
        console.log('Instart');
        alert(options.xhr.getResponseHeader('x-auth'));
    },

    events: {
        "click #login": "onClickLogin",
        "onChange":"sendAuthentication"
    },

    onSaveClick: function(user){
        console.log("Saved");
    },

    onClickLogin: function(e) {
        e.preventDefault();
        var self = this;
        var Userx = new User({email:$('#email').val(), password:$("#pass").val()});
        Userx.save();
        if(Userx.id != ''){
            var theTokens = Userx.get("tokens");
            console.log(Userx);
            // console.log("Logged in");
             var todoModel = new TodoItems()
             var todosView = new TodoItemsView({ el: "#container" }, todoModel.fetch({
                beforeSend: sendAuthentication(Userx) 
             }));
             todosView.render();

        }

        
    },

    
    
    render: function() {
        const template = _.template($('#userTemplate').html());
        const html = template();
        this.$el.html(html);
        return this;
    }
});

var sendAuthentication = function (xhr, Models) {
    console.log(Models);
    //xhr.setRequestHeader("x-auth", Models.get("tokens"));
}

