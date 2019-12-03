import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {TodoModel} from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class APIService implements InMemoryDbService {

  createDb() {
    const todos = [
      {
        id: 1,
        name: 'First todo',
        date: '2020-01-01'
      },
      {
        id: 2,
        name: 'Second todo',
        date: '2020-01-02'
      }
      ,
      {
        id: 3,
        name: 'Third todo',
        date: '2020-01-03'
      }
    ];

    return {todos};
  }
}
