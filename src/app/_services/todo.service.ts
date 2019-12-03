import { Injectable } from '@angular/core';
import {TODOS} from '../_helpers/mock-todos';
import {TodoModel} from '../_models/todo.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.apiUrl);
  }

  getTodo(id: number): Observable<TodoModel> {
    return this.http.get<TodoModel>(this.apiUrl + `/${id}`);
  }

  updateTodo(td: TodoModel) {
    return this.http.put<TodoModel>(this.apiUrl, td);
  }

  deleteTodo(id: number) {

    const apiUrl = this.apiUrl + `/${id}`;
    return this.http.delete(apiUrl);
  }

  addTodo(todo: TodoModel) {

    return this.http.post<TodoModel>(this.apiUrl, todo);
  }
}
