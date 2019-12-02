import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../_models/todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: TodoModel;

  constructor() { }

  ngOnInit() {
  }

}
