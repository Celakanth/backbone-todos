$(document).ready(function() {
    var todoItems = new TodoItems([
        new TodoItem({ id: "item1", description: "This is a todo 1" }),
        new TodoItem({ id: "item2", description: "This is a todo 2" }),
        new TodoItem({ id: "item3", description: "This is a todo 3" }),
        new TodoItem({ id: "item4", description: "This is a todo 4" })
    ]);

    // var todoItemsview = new TodoCollection({ model: todoItems });

    // $("body").append(todoItemsview.render().$el);

    var userView = new UserView({ el: '#container' });
    userView.render();
});