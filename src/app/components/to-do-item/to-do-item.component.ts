import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; // Added Input
import { TodoService } from '../../services/todo.service'

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }  // Here we're binding (local) todoService with the actual TodoService (from todo.service.ts)

  ngOnInit(): void {
  }

  // Set Dynamic Classes (if the todo's "completed" property is true, refer to  )
  setClasses(){
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    // Toggle in UI
    todo.completed = !todo.completed; // This is not a persistent change (browser/front-end only!)
    // Toggle on server
    this.todoService.toggleCompletedService(todo).subscribe(todo => console.log(todo))
  }
  // Delete requires EventEmitter, Output as we need to "emit an event upward" and remove a Todo from the UI
  
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }

}
