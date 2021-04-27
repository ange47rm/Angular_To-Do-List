import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor() { }

  ngOnInit(): void {
  }

  // The title property of this component will be captured (see ngModel) and bound to the title property of the todo
  // Requires EventEmitter and Output to be imported.
  onSubmit(){
    const todo = {
      title: this.title,
      completed: false
    }
    this.addTodo.emit(todo);  // Generates an output event as we need to pass the Todo to the Todos Component.
  }                           // We "catch" this from the todos.component.html by adding (addTodo)="addTodo($event)"
}
