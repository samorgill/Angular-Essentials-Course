import { Injectable } from '@angular/core';
import {TODOS} from '../_helpers/mock-todos';
import {TodoModel} from '../_models/todo.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<TodoModel[]> {
    return of(TODOS);
  }

  updateTodo(td: TodoModel) {
    const newTodo = TODOS.find(todo => todo.id === td.id);
    return of(newTodo);
  }

  deleteTodo(id: number) {
    const arr = TODOS.filter(td => td.id !== id);
    return of(arr);
  }

  addTodo(todo: TodoModel) {
    const length = TODOS.length;
    const id = TODOS.length + 1;
    todo.id = 4;
    TODOS.push(todo);
    return of(TODOS);
  }
}
