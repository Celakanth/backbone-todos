$(document).ready(function(){
    var todoItems = new TodoItems([
        new TodoItem({ description : "This is a todo 1" }) , 
        new TodoItem({ description: "This is a todo 2" }), 
        new TodoItem({ description: "This is a todo 3" }),
        new TodoItem({ description: "This is a todo 4" })
     ]);

    var todoItemsview = new TodoCollection({ model: todoItems });

    $("body").append(todoItemsview.render().$el);
});