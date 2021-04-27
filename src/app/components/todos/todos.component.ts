import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];     // todos is an array of Todo's objects. The Todo model is defined in the "models" folder.

  constructor(private todoService:TodoService) { } // Used mainly to import services. Runs on component init. Here we're binding (local) todoService with the actual TodoService (from todo.service.ts)


  /* On initialization, ngOnInit runs (returns nothing/void) and performs the "fetch". This is done by importing the todoService and running its getTodos function.
     The response is then assigned to the local (state) todos variable. */
  ngOnInit(): void {
    this.todoService.getTodosService().subscribe(todosFromService => {
      this.todos = todosFromService;
    }); // subscribe (= .then)
  }

  deleteTodo(todo:Todo) {
    
    // Remove from UI
    // Filter loops over the todos (td's). This will return all the td's that don't have that td's id.
    this.todos = this.todos.filter (td => td.id !== todo.id)

    // Remove from server
    this.todoService.deleteTodoService(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.todoService.addTodoService(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
