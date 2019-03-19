/*
    Main starting file
*/
$(document).ready(function() {
     const todoItems = new TodoItems()//[
    //     new TodoItem({title: "test"}),
    //     new TodoItem({title: "Hello"})
    // ]);
    todoItems.fetch();

    var todoItemsview = new TodoItemsView({ model: todoItems });
    $("#container").append(todoItemsview.render().$el);

   
    // var userView = new UserView({ el: '#container' });
    // userView.render();
});