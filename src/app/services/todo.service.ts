import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  // rxjs = Reactive Extensions
import { HttpClient, HttpHeaders } from '@angular/common/http' // To use this we have to inject it in the constructor
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = "https://jsonplaceholder.typicode.com/todos"; 

  todosLimit = '?_limit=5'

  constructor(private http:HttpClient) { }

  /* getTodosService is a function that returns an Observable object which consists in an array of Todo objects.
     It uses the HttpClient module to do essentially a fetch, combining todosUrl and todosLimit (to limit the response to 5 objects) */
  getTodosService():Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle Completed
  toggleCompletedService(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`; 
    return this.http.put(url, todo, httpOptions);
  }
  // Delete Todo
  deleteTodoService(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`; 
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodoService(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
  }

}


