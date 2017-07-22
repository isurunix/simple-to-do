angular
  .module('todo-app')
	.component('toDoItem',{

 		 templateUrl: './components/todo.html',

  		bindings: {
    		text:'@',
    		onDelete: '&'
  		},

      controller: ToDoItemController

	});


function ToDoItemController() {
  var ctrl = this;

  ctrl.done = function () {
    console.log(ctrl.text);
    ctrl.onDelete({item: ctrl.text});
  };

}
