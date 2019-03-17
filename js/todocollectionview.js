const TodoCollection = Backbone.View.extend({
    tagName: "ul",
    id: "todoItems",

    initialize: function(options){
        if(!(options && options.model))
            throw new Error("No modal data");
        this.model.on("add", this.onAddTodoItem, this);
        
    },

    onAddTodoItem: function(todoItem){
        const view = new TodoItemView({model: todoItem});
        this.$el.append(view.render().$el);
    },

    events:{
        "click #add":"onClickAdd",
        "keypress #newTodoItem" : "onKeyPress",
        
    },

    onKeyPress: function(e){
        if(e.keyCode == 13){
            this.onClickAdd();
        }
    },

    onClickAdd: function(){
        const $TodoInput = this.$("#newTodoItem");
        if($TodoInput.val()){
            const todoItem = new TodoItem({description: $TodoInput.val()});
            
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
