import { Component, OnInit } from '@angular/core';
import {TodoModel} from '../_models/todo.model';
import {TodoService} from '../_services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  appName = ' Todo App';

  todos: TodoModel[];
  selectedTodo: TodoModel;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos: TodoModel[]) => {
      this.todos = todos;
    });
  }

  onSelect(todo: TodoModel) {
    this.selectedTodo = todo;
  }

  onClickDeleted(id: number) {
    this.todoService.deleteTodo(id)
      .subscribe((todoArr: TodoModel[]) => {
        this.todos = todoArr;
      });
  }
}
