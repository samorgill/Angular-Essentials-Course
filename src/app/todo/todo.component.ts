import { Component, OnInit } from '@angular/core';
import {TodoModel} from '../_models/todo.model';
import {TODOS} from '../_helpers/mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  appName = ' Todo App';

  todos: TodoModel[];
  selectedTodo: TodoModel;

  constructor() { }

  ngOnInit() {
    this.todos = TODOS;
  }

  onSelect(todo: TodoModel) {
    this.selectedTodo = todo;
  }

}
