const TodoCollection = Backbone.View.extend({
    tagName: "ul",
    id: "todoItems",

    initialize: function(options){
        if(!(options && options.model))
            throw new Error("No modal data");
        this.model.on("add", this.onAddTodoItem, this);
        this.model.on("remove", this.onRemoveTodoItem, this);
        
    },

    onRemoveTodoItem: function (todoItem) {
        console.log(todoItem);
        this.$("li#" + todoItem.id).remove();
    },

    onAddTodoItem: function(todoItem){
        const view = new TodoItemView({model: todoItem});
        this.$el.append(view.render().$el);
    },

    events:{
        "click #add":"onClickAdd",
        "keypress #newTodoItem": "onKeyPress"
        
    },

    onKeyPress: function(e){
        if(e.keyCode == 13){
            this.onClickAdd();
        }
    },

    onClickAdd: function(){
        const $TodoInput = this.$("#newTodoItem");
        if ($TodoInput.val()) {
            $theId =  $TodoInput.val().replace(" ","") + this.model.length
            const todoItem = new TodoItem({id: $theId.replace(" ", ""), description: $TodoInput.val(), isCompleted:false});
            
            this.model.add(todoItem);

            $TodoInput.val("");
        }
    },


    render: function(){
        const self = this;
        console.log(this.model)

        this.$el.append("<input type='text' id='newTodoItem' autofocus></input>");

        this.$el.append("<button id='add'>Add</button>");

        this.model.each(function(todoItem){
            const view = new TodoItemView({ model: todoItem});
            self.$el.append(view.render().$el);
        });
        return this;
    }
})
