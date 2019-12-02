import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../_models/todo.model';
import {TodoService} from '../_services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: TodoModel;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  onClickUpdate(todo) {
    this.todoService.updateTodo(todo)
      .subscribe((td: TodoModel) => {
        console.log(td.name + ' updated');
      });
  }
}
